import PropTypes from 'prop-types';
import {
    ListItem,
    Contact,
    ButtonDelete,
    ContactContainer,
  } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = ({ contacts }) => {
    const dispatch = useDispatch();
  
    return (
        <ContactContainer>
          {contacts.map(({ id, name, number }) => (
            <ListItem key={id}>
              <Contact>
                {name}: {number}{' '}
              </Contact>{' '}
              <ButtonDelete onClick={() => dispatch(deleteContact(id))}>
                Delete
              </ButtonDelete>{' '}
            </ListItem>
          ))}
        </ContactContainer>
      );
    };

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  };