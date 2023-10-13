import { Form } from 'formik';
import styled from 'styled-components';

export const FormPhoneBook = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 50px 20px;
  background-color: lightblue;
`;

export const FormBtn = styled.button`
  width: 120px;
  margin: 0 auto;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
