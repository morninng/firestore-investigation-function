import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/functions/write-firebase-functions

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});





exports.createEvent = functions.firestore
.document('event_related-event/{eventId}')
.onCreate(event => {
  // Get an object representing the document
  // e.g. {'name': 'Marie', 'age': 66}
  const eventData = event.data.data();

  // access a particular field as you would any JS property
  console.log(eventData);
  return true;
  // perform desired operations ...
});



exports.createParticipant = functions.firestore
.document('event_related-event/{event_id}/participant_collection_2/{user_id}')
.onCreate(event => {
  // Get an object representing the document
  // e.g. {'name': 'Marie', 'age': 66}
  const event_id = event.params.event_id;
  console.log('event_id', event_id);
  const user_id = event.params.user_id;
  console.log('user_id', user_id)
  // access a particular field as you would any JS property
  const date_obj = event.data.data();
  const date = date_obj.date;

  return true;
  // perform desired operations ...
});
