import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'alumniSpotlight',
  title: 'Alumni Spotlight',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' })
      ],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'batch',
      title: 'Batch / Graduation Year',
      type: 'string',
      description: 'e.g. 2009'
    }),
    defineField({
      name: 'quote',
      title: 'Quote / Achievement',
      type: 'text',
      rows: 3,
      description: 'A short quote or description of their achievement'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first'
    })
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: { title: 'name', subtitle: 'batch', media: 'photo' },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: subtitle ? `Batch ${subtitle}` : '', media };
    }
  }
});
