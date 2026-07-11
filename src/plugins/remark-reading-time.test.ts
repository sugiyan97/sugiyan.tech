import { describe, expect, it } from 'vitest'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkReadingTime from './remark-reading-time'

function run(markdown: string) {
  const frontmatter: Record<string, unknown> = {}
  const tree = unified().use(remarkParse).parse(markdown)
  // @ts-expect-error - unified plugins expect `this: Processor`; called directly outside `.use()` for unit testing
  const transform = remarkReadingTime()
  // @ts-expect-error - minimal fake VFile, only `data.astro.frontmatter` is read
  transform(tree, { data: { astro: { frontmatter } } })
  return frontmatter
}

describe('remarkReadingTime', () => {
  it('sets minutesRead on the frontmatter', () => {
    const frontmatter = run('word '.repeat(400))
    expect(frontmatter.minutesRead).toMatch(/min read/)
  })

  it('does nothing when there is no astro frontmatter on the file', () => {
    const tree = unified().use(remarkParse).parse('hello world')
    // @ts-expect-error - unified plugins expect `this: Processor`; called directly outside `.use()` for unit testing
    const transform = remarkReadingTime()
    // @ts-expect-error - simulate a file with no frontmatter data at all
    expect(() => transform(tree, { data: {} })).not.toThrow()
  })
})
