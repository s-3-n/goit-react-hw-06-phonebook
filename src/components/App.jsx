import { ContactForm, ContactList, Filter } from 'components';
import {
  TitleStyled,
  SubtitleStyled,
} from '../components/ContactForm/ContactForm.styled';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <TitleStyled>Phonebook</TitleStyled>
      <ContactForm />
      <SubtitleStyled>Contacts</SubtitleStyled>
      <Filter />
      <ContactList />
    </div>
  );
};
