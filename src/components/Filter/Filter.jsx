import React from 'react';
import { FilterLabel } from './Filter.Styled';

export const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <FilterLabel>
        Find contact by name or number
        <input
          name="filter"
          type="text"
          value={filter}
          onChange={e => handleChange(e.target.value)}
        />
      </FilterLabel>
    </>
  );
};
