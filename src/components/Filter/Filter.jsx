import React from 'react';

export const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={e => handleChange(e.target.value)}
      />
    </>
  );
};
