import styled from 'styled-components';

export const FormPhoneBook = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

export const FormBtn = styled.button`
  width: 120px;
  margin: 0 auto;
  background-color: lightcoral;
  &:active {
    background-color: lightblue;
  }
  &:hover {
    background-color: lightgreen;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
