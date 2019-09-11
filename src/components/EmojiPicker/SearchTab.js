import React, { useEffect, useState } from 'react';
import useInput from '../../hooks/useInputs';
import { Icon } from 'semantic-ui-react';
import EmojiNameArray from '../../data/search';
import CategoryTab from './CategoryTab';

const SearchTab = () => {
  const { value, bind } = useInput('');
  const [filterEmoji, setFilterEmoji] = useState([]);
  useEffect(()=>{
    //TODO: use debounce if enough time
    if(value.length >2){
    const filteredEmojis = EmojiNameArray.filter((emoji) => emoji.name.includes(value))
    console.log(filteredEmojis);
    console.log('EMOJI COUNT', filteredEmojis.length)
    setFilterEmoji(filteredEmojis.map(emoji => emoji.value));
    }
    else{
      setFilterEmoji([]);
    }
  },[value])
  const handleSearchClick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className='search-form' onSubmit={handleSearchClick}>
        <input
          type='text'
          className='searchTerm'
          placeholder='Search emojis..'
          {...bind}
          autoFocus
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
      <CategoryTab categoryEmojis={filterEmoji} />
    </div>
  );
};

export default SearchTab;
