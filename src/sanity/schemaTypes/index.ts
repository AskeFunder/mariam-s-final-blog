// src/sanity/schemaTypes/index.ts
import article from './article'
import portfolioItem from './portfolioItem'
import page from './page'
import siteSettings from './siteSettings'
import seo from './seo'

export const schema = {
  types: [article, portfolioItem, page, siteSettings, seo],
}
