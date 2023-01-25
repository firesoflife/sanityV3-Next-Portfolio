import { HomeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'


export default defineType({
  name: 'homepage',
  title: 'Homepage',
  icon: HomeIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    })
  ]
})
