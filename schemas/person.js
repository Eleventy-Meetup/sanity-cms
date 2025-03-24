import {UserIcon} from '@sanity/icons';

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
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string'
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
      name: 'bluesky',
      title: 'Bluesky (url)',
      type: 'url',
    },
    {
      name: 'twitter',
      title: 'Twitter (url) NOT USED ANYMORE',
      type: 'url',
    },
    {
      name: 'mastodon',
      title: 'Mastodon (url)',
      type: 'url',
    },
    {
      name: 'bio',
      title: 'Short Bio',
      type: 'blockContent',
    },
    {
      name: 'organizer',
      title: 'Organizer',
      type: 'boolean',
      description: 'Set to organizer if this person is one of the meetup organizers',
    },
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
}
