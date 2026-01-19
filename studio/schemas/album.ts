import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'album',
  title: 'Album',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Landscape', value: 'Landscape' },
          { title: 'Portrait', value: 'Portrait' },
          { title: 'Street', value: 'Street' },
          { title: 'Architecture', value: 'Architecture' },
          { title: 'Nature', value: 'Nature' },
          { title: 'Macro', value: 'Macro' },
          { title: 'Astrophotography', value: 'Astrophotography' },
          { title: 'Event', value: 'Event' },
          { title: 'Wedding', value: 'Wedding' },
          { title: 'Commercial', value: 'Commercial' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date'
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage'
    }
  }
})
