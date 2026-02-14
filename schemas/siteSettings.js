import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'schoolName',
      title: 'School Name',
      type: 'string',
      initialValue: 'Iloilo Integrated School Inc.',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string'
    }),
    defineField({
      name: 'foundedYear',
      title: 'Founded Year',
      type: 'number',
      initialValue: 2001
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text'
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string'
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url'
    }),
    defineField({
      name: 'enrollmentUrl',
      title: 'Enrollment URL',
      type: 'url'
    }),
    defineField({
      name: 'heroImages',
      title: 'Hero Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
    defineField({
      name: 'missionText',
      title: 'Mission Statement',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'missionImage',
      title: 'Mission Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'visionText',
      title: 'Vision Statement',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'visionImage',
      title: 'Vision Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'milestones',
      title: 'Story Milestones',
      description: 'Timeline milestones shown in the "Our Story" section.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'year',
              title: 'Year',
              type: 'string',
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
              rows: 3,
              validation: (rule) => rule.required()
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true }
            })
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'year',
              media: 'image'
            }
          }
        }
      ]
    }),
    defineField({
      name: 'schoolStory',
      title: 'School Story',
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
    })
  ]
});
