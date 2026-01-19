import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'clientGallery',
  title: 'Client Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'clientName', maxLength: 96 },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'eventName',
      title: 'Event Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'date'
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'password',
      title: 'Gallery Password',
      type: 'string',
      description: 'Password for client access',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'downloadEnabled',
      title: 'Enable Downloads',
      type: 'boolean',
      description: 'Allow clients to download photos',
      initialValue: true
    }),
    defineField({
      name: 'expiresAt',
      title: 'Expiry Date',
      type: 'date',
      description: 'Gallery will expire after this date (optional)'
    }),
    defineField({
      name: 'message',
      title: 'Personal Message',
      type: 'text',
      rows: 3,
      description: 'A personal note to display to the client'
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'photo' }] }]
    })
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'eventName',
      media: 'coverImage'
    }
  }
})
