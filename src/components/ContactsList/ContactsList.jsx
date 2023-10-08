import React from 'react';
import { ContactsPhonelist } from './ContactsList.Styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <>
      <ContactsPhonelist>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => onDelete(id)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ContactsPhonelist>
    </>
  );
};
