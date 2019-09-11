import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import { emojis } from '../../data/emojis';
import CategoryTab from './CategoryTab';
import SearchTab from './SearchTab';

const panes = Object.values(emojis).map(categoryEmojis => ({
  menuItem: categoryEmojis[0],
  render: () => <CategoryTab categoryEmojis={categoryEmojis} />,
}));

panes.unshift({
  menuItem: "🔍 ",
  render: () => <SearchTab />
})

class EmojiPicker extends Component {
  render() {
    return (
      <div className="emoji-picker">
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} defaultActiveIndex="1" />
      </div>
    );
  }
}



export default EmojiPicker;
