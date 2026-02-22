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
    }),
    defineField({
      name: 'coreValues',
      title: 'Core Values',
      description: 'Values shown in the "Our Heart" section.',
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
              rows: 2,
              validation: (rule) => rule.required()
            })
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' }
          }
        }
      ]
    }),
    defineField({
      name: 'founderTribute',
      title: 'Founder Tribute',
      description: 'Tribute block shown in the "Our Heart" section.',
      type: 'object',
      fields: [
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'role', title: 'Role', type: 'string' }),
        defineField({
          name: 'photo',
          title: 'Photo',
          type: 'image',
          options: { hotspot: true }
        }),
        defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 3 }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 })
      ]
    }),
    defineField({
      name: 'anniversaryTagline',
      title: 'Anniversary Tagline',
      description: 'Tagline shown at the bottom of the "Our Heart" section.',
      type: 'string'
    }),
    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Us',
      description: 'Value propositions shown in the "Why Choose IIS?" section.',
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
              rows: 2,
              validation: (rule) => rule.required()
            })
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' }
          }
        }
      ]
    }),
    defineField({
      name: 'schoolStats',
      title: 'School Stats',
      description: 'Numbers shown in the "By the Numbers" section (e.g. "25+", "500+").',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              description: 'e.g. "25+", "500+", "DepEd"',
              type: 'string',
              validation: (rule) => rule.required()
            }),
            defineField({
              name: 'label',
              title: 'Label',
              description: 'e.g. "Years of Excellence", "Graduates"',
              type: 'string',
              validation: (rule) => rule.required()
            })
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' }
          }
        }
      ]
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      description: 'Parent testimonials shown in the "What Parents Say" section.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required()
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required()
            }),
            defineField({
              name: 'role',
              title: 'Role',
              description: 'e.g. "Parent of Grade 3 student"',
              type: 'string',
              validation: (rule) => rule.required()
            })
          ],
          preview: {
            select: { title: 'name', subtitle: 'quote' }
          }
        }
      ]
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image (OG Image)',
      description: 'Image shown when the website is shared on Facebook, Twitter, etc. Recommended size: 1200x630.',
      type: 'image',
      options: { hotspot: true }
    })
  ]
});
