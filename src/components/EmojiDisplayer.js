import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEmoji } from '../redux/selectors';
import UnicodeMapper from '../util/UnicodeMapper';

class EmojiDisplayer extends Component {
  render() {
    let emoji = this.props.emoji || '😃';
    let name = UnicodeMapper(emoji);
    name = name.replace(/_/g, ' ');
    return (
      <div className='emoji-displayer'>
        {emoji} {name}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    emoji: state.emoji.setEmoji
})

export default connect(mapStateToProps)(EmojiDisplayer);
// state => ({ emoji: getEmoji(state) })