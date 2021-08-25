import axios from 'axios';

axios.defaults.baseURL = 'https://611cb128a18e850017decb95.mockapi.io/api/v2';

export const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);

  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
};

export const deleteContact = async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
};
