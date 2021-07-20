import {TiMicrophone as icon} from 'react-icons/ti'

export default {
  name: 'talk',
  title: 'Talk',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'person',
      title: 'Speaker',
      type: 'reference',
      to: [{type: 'person'}],
    },
    {
      name: 'youtube',
      title: 'Youtube ID for recording (not full URL)',
      type: 'string',
    },
  ],
}
