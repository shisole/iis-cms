import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'facebookPost',
  title: 'Facebook Post',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Post Content',
      description: 'Copy the text from your Facebook post.',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Post Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' })
      ]
    }),
    defineField({
      name: 'postUrl',
      title: 'Facebook Post URL',
      description: 'Link to the original Facebook post.',
      type: 'url'
    }),
    defineField({
      name: 'postedAt',
      title: 'Date Posted',
      type: 'datetime',
      validation: (rule) => rule.required()
    })
  ],
  orderings: [
    {
      title: 'Date Posted, Newest',
      name: 'postedAtDesc',
      by: [{ field: 'postedAt', direction: 'desc' }]
    }
  ],
  preview: {
    select: { title: 'content', date: 'postedAt', media: 'image' },
    prepare({ title, date, media }) {
      return {
        title: title?.length > 60 ? title.slice(0, 60) + '...' : title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
        media
      };
    }
  }
});
