import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { PhoneBook, PhonebookContainer, ContactsTitle } from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.trim().toLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <PhonebookContainer>
      <PhoneBook>Phonebook</PhoneBook>
      <ContactForm/>
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter/>
      
      {filterContacts.length > 0 ? (
        <ContactList
          contacts={filterContacts}
        />
      ) : (
        alert(`There are no matches`)
      )}
    </PhonebookContainer>
  );
};

export default App;