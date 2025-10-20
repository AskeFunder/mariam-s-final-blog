// src/lib/dummy.ts
export type DummyMedia = { url: string; w?: number; h?: number }

export type DummyArticle = {
  _id: string
  title: string
  slug: string
  date: string
  category: 'brief' | 'notes-on-art'
  cover?: DummyMedia
}

export type DummyPortfolio = {
  _id: string
  title: string
  slug: string
  hero?: DummyMedia
}

export const DUMMY_ARTICLES: DummyArticle[] = [
  {
    _id: 'a1',
    title: 'A curatorial hunch',
    slug: 'a-curatorial-hunch',
    date: '2025-09-01T10:00:00Z',
    category: 'brief',
    cover: { url: 'https://picsum.photos/seed/curate1/1200/800', w: 1200, h: 800 },
  },
  {
    _id: 'a2',
    title: 'Notes on art: surfaces and frictions',
    slug: 'surfaces-and-frictions',
    date: '2025-08-22T12:00:00Z',
    category: 'notes-on-art',
    cover: { url: 'https://picsum.photos/seed/curate2/1200/1500', w: 1200, h: 1500 },
  },
  {
    _id: 'a3',
    title: 'Brief: a gif can be serious',
    slug: 'gif-can-be-serious',
    date: '2025-07-10T09:00:00Z',
    category: 'brief',
    cover: { url: 'https://picsum.photos/seed/curate3/1600/900', w: 1600, h: 900 },
  },
]

export const DUMMY_PORTFOLIO: DummyPortfolio[] = [
  {
    _id: 'p1',
    title: 'Project: Post-Soviet Rooms',
    slug: 'post-soviet-rooms',
    hero: { url: 'https://picsum.photos/seed/psr/1600/1000' },
  },
  {
    _id: 'p2',
    title: 'Installation: Light Leak',
    slug: 'light-leak',
    hero: { url: 'https://picsum.photos/seed/light/1600/1000' },
  },
  {
    _id: 'p3',
    title: 'Text: Everything Was Forever…',
    slug: 'everything-forever',
    hero: { url: 'https://picsum.photos/seed/ever/1600/1000' },
  },
]

export const ABOUT = {
  title: 'About',
  content: [
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'This is a proof-of-concept build for a curator blog. Replace with your own text.' }],
    },
  ],
}
