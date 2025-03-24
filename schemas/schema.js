// We import object and document schemas
import blockContent from './blockContent'
import event from './event'
import talk from './talk'
import person from './person'
import eventTalk from './eventTalk'

// Then we give our schema to the builder and provide the result to Sanity
export default [
  // The following are document types which will appear
  // in the studio.
  event,
  person,
  talk,
  // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
  blockContent,
  eventTalk,
]