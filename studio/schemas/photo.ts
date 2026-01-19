import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'photo',
  title: 'Photo',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2
    }),
    defineField({
      name: 'album',
      title: 'Album',
      type: 'reference',
      to: [{ type: 'album' }]
    }),
    defineField({
      name: 'camera',
      title: 'Camera',
      type: 'string'
    }),
    defineField({
      name: 'lens',
      title: 'Lens',
      type: 'string'
    }),
    defineField({
      name: 'aperture',
      title: 'Aperture',
      type: 'string'
    }),
    defineField({
      name: 'shutterSpeed',
      title: 'Shutter Speed',
      type: 'string'
    }),
    defineField({
      name: 'iso',
      title: 'ISO',
      type: 'string'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'dateTaken',
      title: 'Date Taken',
      type: 'date'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' }
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
      hidden: true
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
      hidden: true
    }),
    defineField({
      name: 'order',
      title: 'Order in Album',
      type: 'number'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'image'
    }
  }
})
