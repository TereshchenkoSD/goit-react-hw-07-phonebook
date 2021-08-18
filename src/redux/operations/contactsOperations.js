import * as contactsActions from '../actions';
import * as phoneBookApi from '../../service';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await phoneBookApi.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};
