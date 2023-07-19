import { useDispatch } from 'react-redux';

import {
  InputStyled,
  CaptionFStyled,
} from 'components/ContactForm/ContactForm.styled';
import { filtered } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <CaptionFStyled>Find contacts by name</CaptionFStyled>
      <InputStyled
        onChange={e => dispatch(filtered(e.target.value))}
        type="text"
      />
    </>
  );
};

export default Filter;
