import { describe, expect, it } from 'vitest'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkDescription from './remark-description'

function run(markdown: string, options?: { maxChars?: number }) {
  const frontmatter: Record<string, unknown> = {}
  const tree = unified().use(remarkParse).parse(markdown)
  // @ts-expect-error - unified plugins expect `this: Processor`; called directly outside `.use()` for unit testing
  const transform = remarkDescription(options)
  // @ts-expect-error - minimal fake VFile, only `data.astro.frontmatter` is read
  transform(tree, { data: { astro: { frontmatter } } })
  return frontmatter
}

describe('remarkDescription', () => {
  it('uses the existing frontmatter description if present', () => {
    const frontmatter: Record<string, unknown> = { description: 'Already set' }
    const tree = unified().use(remarkParse).parse('# Title\n\nSome body text.')
    // @ts-expect-error - unified plugins expect `this: Processor`; called directly outside `.use()` for unit testing
    const transform = remarkDescription()
    // @ts-expect-error - minimal fake VFile
    transform(tree, { data: { astro: { frontmatter } } })
    expect(frontmatter.description).toBe('Already set')
  })

  it('falls back to the first paragraph, skipping headings and images', () => {
    const frontmatter = run('# Title\n\n![alt](./cover.png)\n\nThe real first paragraph.')
    expect(frontmatter.description).toBe('The real first paragraph.')
  })

  it('truncates long descriptions at a word boundary with an ellipsis', () => {
    const frontmatter = run('a'.repeat(50) + ' ' + 'b'.repeat(50), { maxChars: 60 })
    expect(frontmatter.description).toMatch(/…$/)
    expect((frontmatter.description as string).length).toBeLessThanOrEqual(61)
  })
})
