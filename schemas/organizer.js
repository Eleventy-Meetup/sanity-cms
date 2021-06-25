import {GrUserManager as icon} from 'react-icons/gr'

export default {
  name: 'organizer',
  title: 'Organizer',
  type: 'document',
  icon,
  fields: [
    {
      name: 'person',
      title: 'Actor',
      type: 'reference',
      to: [{type: 'person'}],
    },
  ],
  preview: {
    select: {
      subtitle: 'characterName',
      title: 'person.name',
      media: 'person.image',
    },
  },
}
