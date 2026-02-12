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
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'schoolStory',
      title: 'School Story',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ]
});
