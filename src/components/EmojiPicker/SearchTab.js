import React, { useEffect } from 'react';
import useInput from '../../hooks/useInputs';
import { Icon } from 'semantic-ui-react';
import EmojiNameArray from '../../data/search';

const SearchTab = () => {
  const { value, bind } = useInput('');
  useEffect(()=>{
    const filteredEmojis = EmojiNameArray.filter((emoji) => emoji.name.includes(value))
    console.log(filteredEmojis);
    console.log('EMOJI COUNT', filteredEmojis.length)
  },[value])
  const handleSearchClick = (e) => {
    e.preventDefault();
    // const filteredEmojis = EmojiNameArray.filter((emoji) => emoji.name.includes(value))
    // console.log(filteredEmojis);
    // console.log('EMOJI COUNT', filteredEmojis.length)
   
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
