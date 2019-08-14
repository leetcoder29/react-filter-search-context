import React, { FC, createContext, useReducer } from 'react';

import { Search } from './components/Search';
import { Results } from './components/Results';
import { Filter } from './components/Filter';
import data from './db/db.json';

interface SearchContextProps {
  searchState: {
    searchTerm: string;
    searchResults: Todo[];
    searchFilter: string;
  };
  handleSearchSubmit: Function;
  handleSetFilter: Function;
}

interface SearchReducerState {
  searchTerm: string;
  searchResults: Todo[];
  searchFilter: string;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
  category: string;
}

export const SearchContext = createContext<SearchContextProps | null>(null);

const initialState = {
  searchTerm: '',
  searchResults: [],
  searchFilter: 'FILTER_OFF',
};

export const searchReducer = (
  state: SearchReducerState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case 'SUBMIT_SEARCH':
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
        searchResults: action.payload.searchResults,
      };

    case 'FILTER_OFF':
      return {
        ...state,
        searchFilter: action.payload,
      };

    case 'FILTER_ERRAND_ONLY':
      return {
        ...state,
        searchFilter: action.payload,
      };

    case 'FILTER_WORK_ONLY':
      return {
        ...state,
        searchFilter: action.payload,
      };

    default:
      return state;
  }
};

export const App: FC = () => {
  const [searchState, dispatchSearch] = useReducer(searchReducer, initialState);

  const handleSearchSubmit = (searchTerm: string) => {
    const searchResults = data.filter(item => {
      if (item.title.includes(searchTerm)) {
        return item;
      }
    });
    const payload = {
      searchTerm,
      searchResults,
    };
    dispatchSearch({
      type: 'SUBMIT_SEARCH',
      payload,
    });
  };

  const handleSetFilter = (filterKey: string) => {
    dispatchSearch({
      type: filterKey,
      payload: filterKey,
    });
  };

  const context: SearchContextProps = {
    searchState,
    handleSearchSubmit,
    handleSetFilter,
  };

  return (
    <SearchContext.Provider value={context}>
      <Search />
      <Filter />
      <Results />
    </SearchContext.Provider>
  );
};
