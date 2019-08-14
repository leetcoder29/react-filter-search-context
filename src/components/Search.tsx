import React, { FC, ChangeEvent, useState, useContext } from 'react';
import { SearchContext } from '../App';

export const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const context = useContext(SearchContext);

  const handleSetSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    context!.handleSearchSubmit(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='search-term'>
          Search <input onChange={handleSetSearchTerm} id='username' />
        </label>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};
