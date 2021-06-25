import {MdEvent as icon} from 'react-icons/md'

export default {
  name: 'event',
  title: 'Event',
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
      name: 'published',
      title: 'Published',
      type: 'boolean',
      description: 'Set to published when this event should be visible on a front-end',
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    },
    {
      name: 'beginAt',
      title: 'Starts at',
      type: 'datetime',
      description: 'When does the event start?',
    },
    {
      name: 'endAt',
      title: 'Ends at',
      type: 'datetime',
      description: 'When does the event end?',
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      description: 'e.g., Zoom link',
      type: 'url',
    },
    {
      name: 'talks',
      title: 'Talks',
      type: 'array',
      of: [{type: 'talk'}],
    },
  ],
}
