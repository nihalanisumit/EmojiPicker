import React from 'react'
import EmojiView from './EmojiView';
import {Segment} from 'semantic-ui-react';

const CategoryTab = ({ categoryEmojis }) => {

    return (
      <Segment basic className="category-container">
        { categoryEmojis.map(emoji => <EmojiView emoji={emoji} key={emoji} />)}
      </Segment>
    );
  };

export default CategoryTab;
