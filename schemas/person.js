import UserIcon from 'part:@sanity/base/user-icon'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'website',
      title: 'Website (url)',
      type: 'url',
    },
    {
      name: 'twitter',
      title: 'Twitter (url)',
      type: 'url',
    },
    {
      name: 'bio',
      title: 'Short Bio',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
}
