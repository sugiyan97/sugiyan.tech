import { describe, expect, it } from 'vitest'
import type { CollectionEntry } from 'astro:content'
import { dateString, getPostSequenceContext, pick, SeriesGroup, TagsGroup } from '~/utils'

function makePost(
  id: string,
  data: Partial<CollectionEntry<'posts'>['data']>,
): CollectionEntry<'posts'> {
  return {
    id,
    collection: 'posts',
    data: {
      title: id,
      published: new Date('2024-01-01'),
      draft: false,
      tags: [],
      toc: true,
      ...data,
    },
  } as CollectionEntry<'posts'>
}

describe('dateString', () => {
  it('formats a Date as YYYY-MM-DD', () => {
    expect(dateString(new Date('2025-03-01T12:34:56Z'))).toBe('2025-03-01')
  })
})

describe('pick', () => {
  it('keeps only the requested keys that exist on the object', () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c', 'missing'])).toEqual({ a: 1, c: 3 })
  })

  it('returns an empty object when no keys match', () => {
    expect(pick({ a: 1 }, ['x', 'y'])).toEqual({})
  })
})

describe('getPostSequenceContext', () => {
  const posts = [makePost('a', {}), makePost('b', {}), makePost('c', {})]

  it('returns prev/next around a post in the middle', () => {
    const { index, prev, next } = getPostSequenceContext(posts[1], posts)
    expect(index).toBe(1)
    expect(prev?.id).toBe('a')
    expect(next?.id).toBe('c')
  })

  it('has no prev for the first post and no next for the last', () => {
    expect(getPostSequenceContext(posts[0], posts).prev).toBeUndefined()
    expect(getPostSequenceContext(posts[2], posts).next).toBeUndefined()
  })
})

describe('SeriesGroup', () => {
  it('groups posts by their series frontmatter, ignoring posts with none', async () => {
    const posts = [
      makePost('a', { series: 'RAG入門', published: new Date('2024-01-01') }),
      makePost('b', { series: 'RAG入門', published: new Date('2024-02-01') }),
      makePost('c', {}),
    ]
    const series = await SeriesGroup.build(posts)
    expect(series.collations).toHaveLength(1)
    expect(series.collations[0].title).toBe('RAG入門')
    expect(series.collations[0].entries.map((e) => e.id)).toEqual(['a', 'b'])
    expect(series.match('RAG入門')?.entries).toHaveLength(2)
    expect(series.match('nonexistent')).toBeUndefined()
  })

  it('does not duplicate a post added to the same series twice', async () => {
    const post = makePost('a', { series: 'X' })
    const series = await SeriesGroup.build([post, post])
    expect(series.collations[0].entries).toHaveLength(1)
  })
})

describe('TagsGroup', () => {
  it('groups posts under each of their tags', async () => {
    const posts = [
      makePost('a', { tags: ['astro', 'meta'] }),
      makePost('b', { tags: ['astro'] }),
    ]
    const tags = await TagsGroup.build(posts)
    expect(tags.match('astro')?.entries.map((e) => e.id)).toEqual(['a', 'b'])
    expect(tags.match('meta')?.entries.map((e) => e.id)).toEqual(['a'])
    expect(tags.matchMany(['astro', 'meta'])).toHaveLength(2)
  })
})
