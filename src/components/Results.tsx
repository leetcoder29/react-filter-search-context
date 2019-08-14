import React, { useContext } from 'react';
import { SearchContext, Todo } from '../App';

export const Results: React.FC = () => {
  const context = useContext(SearchContext);

  const renderResults = () => {
    return context!.searchState.searchResults
      .filter((item: Todo) => {
        const searchFilter = context!.searchState.searchFilter;
        const { category } = item;
        if (searchFilter === 'FILTER_OFF') return true;
        if (searchFilter === 'FILTER_WORK_ONLY' && category === 'work')
          return true;
        if (searchFilter === 'FILTER_ERRAND_ONLY' && category === 'errand')
          return true;
      })
      .map((item: Todo) => {
        const { title, body, id } = item;
        return (
          <div key={id} className='item-container'>
            <h3 className='item-title'>{title}</h3>
            <p className='item-body'>{body}</p>
          </div>
        );
      });
  };

  return (
    <div>
      <h2>Results</h2>
      {context!.searchState.searchTerm ? renderResults() : null}
    </div>
  );
};
