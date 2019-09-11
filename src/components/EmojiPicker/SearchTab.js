import React from 'react';
import useInput from '../../hooks/useInputs';
import { Icon } from 'semantic-ui-react';
import SearchData from '../../data/search';

const SearchTab = () => {
  const data = SearchData();
  const { value, bind } = useInput('');

  const handleSearchClick = (e) => {
    e.preventDefault();
    console.log(data)
    console.log(Object.keys(data).filter(obj => obj.includes(value)))
  };
  return (
    <div>
      <form className='search-form' onSubmit={handleSearchClick}>
        <input
          type='text'
          className='searchTerm'
          placeholder='Search emojis..'
          {...bind}
        />
        <button
          type='submit'
          className='searchButton'
          disabled={value === ''}
        >
          <Icon
            name='search'
            className='search-icon'
            disabled={value === ''}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchTab;
