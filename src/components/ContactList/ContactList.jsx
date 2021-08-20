import PropTypes from 'prop-types';

import { connect, useSelector, useDispatch } from 'react-redux';

import selectors from '../../redux/selectors/contactsSelectors';

import { List } from './ContactList.styles';

import Contact from '../Contact';

import { deleteContact } from '../../redux/actions/contacts';

const ContactList = () => {
  const contacts = useSelector(selectors.getVisibleContacts());
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch();
  };

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};

const mapStateToProps = state => {
  const { filter, contacts } = state;
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return { contacts: visibleContacts };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

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

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
