import { nanoid } from 'nanoid';
import React from 'react';
import { FormBtn, FormLabel, FormPhoneBook } from './Form.Styled';
import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2).required('Required'),
  number: yup.string().min(13).required('Required'),
});

export const AddForm = props => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    props.addContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormPhoneBook>
        <FormLabel>
          Name
          <Field type="text" name="name" />
          <ErrorMessage component="div" name="name" />
        </FormLabel>
        <FormLabel>
          Number
          <Field type="text" name="number" />
          <ErrorMessage component="div" name="number" />
        </FormLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormPhoneBook>
    </Formik>
  );
};
