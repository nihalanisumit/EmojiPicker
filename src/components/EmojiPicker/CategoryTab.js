import React from 'react'
import EmojiView from './EmojiView';

const CategoryTab = ({ categoryEmojis }) => {

    return (
      <div className="category-container">
        { categoryEmojis.map(emoji => <EmojiView emoji={emoji} />)}
      </div>
    );
  };

export default CategoryTab;
