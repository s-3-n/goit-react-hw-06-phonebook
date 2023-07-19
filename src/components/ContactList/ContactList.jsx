import { useDispatch, useSelector } from 'react-redux';

import { BtnStyled } from 'components/ContactForm/ContactForm.styled';
import { ItemStyled, ListStyled } from './ContactList.styled';
import { remove } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phoneBook.contacts);
  const filter = useSelector(state => state.phoneBook.filter);

  const showContacts = () => {
    if (filter === '') return contacts;
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const renderContacts = showContacts();

  return (
    <ListStyled>
      {renderContacts.map(el => (
        <ItemStyled key={el.id}>
          {el.name}: {el.number}
          <BtnStyled onClick={() => dispatch(remove(el.id))}>Delete</BtnStyled>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

export default ContactList;
