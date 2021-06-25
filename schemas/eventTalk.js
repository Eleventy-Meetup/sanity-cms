export default {
  name: 'eventTalk',
  title: 'Event Talks',
  type: 'object',
  fields: [
    {
      name: 'talk',
      title: 'Talk',
      type: 'reference',
      to: [{type: 'talk'}],
    },
  ],
  preview: {
    select: {
      title: 'talk.title',
    },
  },
}
