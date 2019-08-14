import React, { FC, useContext, ChangeEvent } from 'react';
import { SearchContext } from '../App';

export const Filter: FC = () => {
  const context = useContext(SearchContext);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    context!.handleSetFilter(e.target.value);
  };

  return (
    <div className='filter-container'>
      <label htmlFor='filter'>
        Filter
        <select onChange={handleSelectChange}>
          <option value='FILTER_OFF'>All</option>
          <option value='FILTER_ERRAND_ONLY'>Errand</option>
          <option value='FILTER_WORK_ONLY'>Work</option>
        </select>
      </label>
    </div>
  );
};
