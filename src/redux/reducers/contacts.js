import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact, changeFilter } from '../actions/contacts';

export const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
