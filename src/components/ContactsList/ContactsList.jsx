import React from 'react';
import { ContactsPhonelist } from './ContactsList.Styled';
import { RiDeleteBin6Line } from 'react-icons/ri';

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
              <RiDeleteBin6Line size={18} />
            </button>
          </li>
        ))}
      </ContactsPhonelist>
    </>
  );
};
