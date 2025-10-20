// src/sanity/schemaTypes/article.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: r => r.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: r => r.required(),
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Brief', value: 'brief' },
          { title: 'Notes on art', value: 'notes-on-art' },
        ],
        layout: 'radio',
      },
      validation: r => r.required(),
    }),

    // Optional: cover used for cards/hero fallback
    defineField({
      name: 'coverMedia',
      title: 'Cover media',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
        defineField({ name: 'caption', type: 'string', title: 'Caption' }),
      ],
    }),

    // Main rich content (text + images in any order)
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        // Text blocks
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    type: 'url',
                    validation: r => r.required(),
                  }),
                  defineField({ name: 'newTab', type: 'boolean', initialValue: true }),
                ],
              },
            ],
          },
        }),

        // Image blocks with layout/align controls
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
            defineField({ name: 'caption', type: 'string', title: 'Caption' }),
            defineField({
              name: 'layout',
              type: 'string',
              title: 'Layout',
              options: {
                list: [
                  { title: 'Small', value: 's' },
                  { title: 'Medium', value: 'm' },   // default (prose width)
                  { title: 'Wide', value: 'l' },     // wider than prose
                  { title: 'Full-bleed', value: 'full' }, // edge-to-edge
                ],
                layout: 'radio',
              },
              initialValue: 'm',
            }),
            defineField({
              name: 'align',
              type: 'string',
              title: 'Align (optional)',
              options: {
                list: [
                  { title: 'Center', value: 'center' },
                  { title: 'Left (wrap text)', value: 'left' },
                  { title: 'Right (wrap text)', value: 'right' },
                ],
                layout: 'radio',
              },
              initialValue: 'center',
            }),
            defineField({
              name: 'useAsHero',
              type: 'boolean',
              title: 'Use as hero',
              description: 'If checked, this image can be used as the page hero.',
            }),
          ],
        }),
      ],
    }),

    // Optional extras
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
            defineField({ name: 'caption', type: 'string', title: 'Caption' }),
          ],
        }),
        defineArrayMember({ type: 'file' }),
      ],
    }),

    defineField({ name: 'credits', type: 'text' }),
    defineField({ name: 'seo', type: 'seo' }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'coverMedia',
      subtitle: 'category',
    },
    prepare({ title, media, subtitle }) {
      return { title, media, subtitle }
    },
  },
})
