import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as contactsActions from '../actions';

// import { addContact, deleteContact, changeFilter } from '../actions/contacts';

// export const contactsReducer = createReducer([], {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// export const filterReducer = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

export const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, actions) => actions.payload,
});

export const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
});

export const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.fetchContactsRequest]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
