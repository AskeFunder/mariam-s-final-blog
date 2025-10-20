import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteTitle', type: 'string' }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'socialLinks', type: 'array', of: [{ type: 'url' }] }),
    defineField({ name: 'defaultOG', type: 'image' }),
  ],
})
