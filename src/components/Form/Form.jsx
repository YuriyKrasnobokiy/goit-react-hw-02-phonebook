import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { FormBtn, FormLabel, FormPhoneBook } from './Form.Styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const regExpForNumb =
  '+?d{1,4}?[ .-s]?(?d{1,3}?)?[ .-s]?d{1,4}[ .-s]?d{1,4}[ .-s]?d{1,9}';

const regExpForName =
  "^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const schema = yup.object().shape({
  name: yup.addMethod(yup.string, 'name', function validateName(message) {
    return this.matches(regExpForName, {
      message,
      name: 'number',
      excludeEmptyString: true,
    });
  }),
  number: yup.addMethod(yup.string, 'number', function validateNumber(message) {
    return this.matches(regExpForNumb, {
      message,
      name: 'number',
      excludeEmptyString: true,
    });
  }),
});

export default class AddForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.props.addContact(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Formik
        initialValues={this.state}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <FormPhoneBook title="Phonebook">
          <FormLabel>
            Name
            <Field
              type="text"
              name="name"
              //   pattern="^[a-zA-Zа-яА-Я]+((['
              // \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // required
              value={name}
              onChange={this.handleChange}
            />
            <ErrorMessage name="name" component="div" />
          </FormLabel>
          <FormLabel>
            Number
            <Field
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              // required
              value={number}
              onChange={this.handleChange}
            />
            <ErrorMessage name="number" component="div" />
          </FormLabel>
          <FormBtn type="submit">Add contact</FormBtn>
        </FormPhoneBook>
      </Formik>
    );
  }
}
