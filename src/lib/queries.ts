// src/lib/queries.ts

// Prefer explicit cover; otherwise fall back to a body image flagged as hero,
// then first gallery image, then first body image.
const COVER = `"coverUrl": coalesce(
  coverMedia.asset->url,
  body[_type=="image" && defined(useAsHero) && useAsHero==true][0].asset->url,
  gallery[0].asset->url,
  body[_type=="image"][0].asset->url
)`;

// Card fields for lists (home/category)
export const ARTICLE_CARD = `{
  _id,
  title,
  "slug": slug.current,
  date,
  category,
  ${COVER},
  // legacy shape for components that read cover.asset.url
  "cover": coverMedia{ asset->{ url, metadata{dimensions} } }
}`;

export const ALL_HOME = `*[_type=="article"] | order(date desc) [0...30] ${ARTICLE_CARD}`;

export const BY_CATEGORY = `*[_type=="article" && category==$cat]
  | order(date desc) [0...100] ${ARTICLE_CARD}`;

// Detail page (article)
export const ARTICLE_BY_SLUG = `*[_type=="article" && slug.current==$slug][0]{
  _id,
  title,
  date,
  category,
  ${COVER},
  coverMedia{ asset->{ _id, url, metadata{dimensions} } },
  body[]{
    ...,
    asset->{ _id, url, metadata{dimensions} }
  },
  gallery[]{
    ...,
    asset->{ _id, url, metadata{dimensions} }
  },
  credits,
  seo
}`;

// Portfolio (unchanged shape, but include dimensions for good <Image/> sizing)
export const PORTFOLIO_GRID = `*[_type=="portfolioItem"] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  heroMedia{ asset->{ url, metadata{dimensions} } }
}`;

export const PORTFOLIO_BY_SLUG = `*[_type=="portfolioItem" && slug.current==$slug][0]{
  _id,
  title,
  date,
  heroMedia{ asset->{ url, metadata{dimensions} } },
  body[]{
    ...,
    asset->{ _id, url, metadata{dimensions} }
  },
  pressLinks,
  tags,
  seo
}`;

export const ABOUT_PAGE = `*[_type=="page" && slug.current=="about"][0]{
  title,
  content[]
}`;

// Search query
export const SEARCH_ARTICLES = `*[_type=="article" && (title match $searchTerm || category match $searchTerm)] | order(date desc) [0...20] ${ARTICLE_CARD}`;