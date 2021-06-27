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
      name: 'startAt',
      title: 'Starts at',
      type: 'richDate',
      description: 'When does the event start?',
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      description: 'e.g., Zoom link',
      type: 'url',
    },
    {
      name: 'eventTalks',
      title: 'Talks',
      type: 'array',
      of: [{type: 'eventTalk'}],
    },
  ],
}
