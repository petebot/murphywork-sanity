import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
      validation: (rule) => [
        rule.required().min(10).error('An excerpt of min. 10 characters is required'),
        rule.required().max(100).error("Hey! That's too long, pal!"),
      ],
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
    defineField({
      name: 'author',
      title: 'Writer',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'promptedBy',
      title: 'Prompted By',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'storyCycleName',
      title: 'Suite',
      of: [{type: 'reference', to: {type: 'storyCycle'}}],
      type: 'array',
      hidden: ({document}) =>
        !document?.categories ||
        !document?.categories?.some((cat) => cat._ref === '840c65b2-d76a-4408-85f6-2fd8baeeb055'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'related',
      title: 'Related Stories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
