import React from 'react'
import {connect} from 'react-redux';
import {setEmoji} from '../../redux/actions';
import UnicodeMapper from '../../util/UnicodeMapper';

const EmojiView = ({ emoji, setEmo }) => {
    return (
      <div className="single-emoji" onClick={() => setEmo(emoji)}>
          {emoji}
          <div class="tooltiptext">{UnicodeMapper(emoji)}</div>
      </div>
    );
  };

  const mapDispatchToProps = dispatch => ({
    setEmo: (emoji) => dispatch(setEmoji(emoji))
  });

  export default connect(
    null,
    mapDispatchToProps,
  )(EmojiView);
