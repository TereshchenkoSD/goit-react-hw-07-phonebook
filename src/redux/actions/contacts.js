import { createAction } from '@reduxjs/toolkit';

// import { nanoid } from 'nanoid';

// export const addContact = createAction('contacts/Add', (name, number) => {
//   return {
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// });

// export const deleteContact = createAction('contacts/Delete');

export const changeFilter = createAction('items/Change');

// API interaction

// pending

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);

// fulfilled

export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);

// rejected

export const fetchContactsError = createAction('contacts/fetchContactsError');
