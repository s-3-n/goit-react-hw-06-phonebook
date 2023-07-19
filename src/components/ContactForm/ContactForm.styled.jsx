import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  border: solid #cccccc;
`;

export const LabelStyled = styled.label`
  display: contents;
  margin: 0;
  font-size: 18px;
`;

export const InputStyled = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  font-size: 20px;  
`;

export const BtnStyled = styled.button`
  display: inline-block;
  padding: 8px 16px;
  margin: 0 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const TitleStyled = styled.h1`
  margin: 40px;
  font-size: 40px;
`;

export const SubtitleStyled = styled.h2`
  margin: 40px auto 0;
  font-size: 36px;
`;

export const CaptionFStyled = styled.h3`
  margin: 20px auto;
  font-size: 28px;
  font-weight: 400;
`;