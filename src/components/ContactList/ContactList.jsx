import PropTypes from 'prop-types';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import selectors from '../../redux/selectors/contactsSelectors';

import { List } from './ContactList.styles';

import Contact from '../Contact';

import * as operations from '../../redux/operations/contactsOperations';

const ContactList = () => {
  const contacts = useSelector(selectors.getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(operations.deleteContact(id));
  };

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </List>
  );
};

// const mapStateToProps = state => {
//   const { filter, contacts } = state;
//   const normalizedFilter = filter.toLowerCase();

//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );

//   return { contacts: visibleContacts };
// };

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(deleteContact(id)),
// });

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),

  onDeleteContact: PropTypes.func.isRequired,
};

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactList;
