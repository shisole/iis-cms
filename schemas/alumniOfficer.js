import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'alumniOfficer',
  title: 'Alumni Officer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      description: 'e.g. President, Vice President, Business Manager, Batch Representative',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Executive Officer', value: 'executive' },
          { title: 'Business Manager', value: 'business' },
          { title: 'Batch Representative', value: 'batch' }
        ]
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' })
      ]
    }),
    defineField({
      name: 'batchYear',
      title: 'Batch Year',
      type: 'string',
      description: 'Only for Batch Representatives, e.g. 2021',
      hidden: ({ parent }) => parent?.category !== 'batch'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first within category'
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
    select: { title: 'name', subtitle: 'role', media: 'photo' }
  }
});
