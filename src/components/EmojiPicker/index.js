import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import { emojis } from '../../data/emojis';
import CategoryTab from './CategoryTab';

const panes = Object.values(emojis).map(categoryEmojis => ({
  menuItem: categoryEmojis[0],
  render: () => <CategoryTab categoryEmojis={categoryEmojis} />,
}));

class EmojiPicker extends Component {
  render() {
    return (
      <div className="emoji-picker">
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    );
  }
}



export default EmojiPicker;
