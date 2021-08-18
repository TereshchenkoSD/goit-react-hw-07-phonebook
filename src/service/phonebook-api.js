import axios from 'axios';

axios.defaults.baseURL = 'https://611cb128a18e850017decb95.mockapi.io/api/v2/';

export const fetchContacts = async () => {
  const response = await axios.get(`/contacts`);

  return response;
};

export const addContact = async contact => {
  const response = await axios.post(`/contacts/`, contact);
  return response;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response;
};
