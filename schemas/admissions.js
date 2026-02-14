import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'admissions',
  title: 'Admissions',
  type: 'document',
  fields: [
    defineField({
      name: 'overview',
      title: 'Overview',
      description: 'Rich text introduction about the admissions process.',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' })
          ]
        }
      ]
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [
        {
          type: 'object',
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
              rows: 3
            })
          ],
          preview: {
            select: { title: 'title' }
          }
        }
      ]
    }),
    defineField({
      name: 'steps',
      title: 'Enrollment Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'stepNumber',
              title: 'Step Number',
              type: 'number',
              validation: (rule) => rule.required()
            }),
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
              rows: 3
            })
          ],
          preview: {
            select: { title: 'title', stepNumber: 'stepNumber' },
            prepare({ title, stepNumber }) {
              return {
                title: `Step ${stepNumber}: ${title}`
              };
            }
          }
        }
      ]
    }),
    defineField({
      name: 'enrollmentPeriod',
      title: 'Enrollment Period',
      type: 'object',
      fields: [
        defineField({
          name: 'startDate',
          title: 'Start Date',
          type: 'datetime'
        }),
        defineField({
          name: 'endDate',
          title: 'End Date',
          type: 'datetime'
        })
      ]
    }),
    defineField({
      name: 'contactInfo',
      title: 'Admissions Contact Info',
      description: 'Contact information specific to admissions inquiries.',
      type: 'text',
      rows: 4
    })
  ],
  preview: {
    prepare() {
      return { title: 'Admissions' };
    }
  }
});
