import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { FormBtn, FormLabel, FormPhoneBook } from './Form.Styled';

export default class Form extends Component {
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
      <FormPhoneBook title="Phonebook" onSubmit={this.handleSubmit}>
        <FormLabel>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+((['
            \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            value={name}
            onChange={this.handleChange}
          />
        </FormLabel>
        <FormLabel>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
            value={number}
            onChange={this.handleChange}
          />
        </FormLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormPhoneBook>
    );
  }
}
