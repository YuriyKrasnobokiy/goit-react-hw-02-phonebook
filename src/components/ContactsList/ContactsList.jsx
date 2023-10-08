import React from 'react';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => onDelete(id)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
