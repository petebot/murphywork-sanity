// ./schemas/pageType.ts

import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({
      name: 'includeInNav',
      type: 'boolean',
      title: 'Include in Navigation',
      description: 'Include this page in the main navigation menu',
    }),
    defineField({
      name: 'hero',
      type: 'hero',
      title: 'Hero Section',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      title: 'Page Content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
})

export default pageType
