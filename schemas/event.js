import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' })
      ]
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Event',
      type: 'boolean',
      initialValue: false
    })
  ],
  orderings: [
    {
      title: 'Event Date, Earliest',
      name: 'eventDateAsc',
      by: [{ field: 'eventDate', direction: 'asc' }]
    }
  ],
  preview: {
    select: { title: 'title', date: 'eventDate' },
    prepare({ title, date }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date set'
      };
    }
  }
});
