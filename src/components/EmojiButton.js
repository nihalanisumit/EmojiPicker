import React, { Component } from 'react';
import { connect } from 'react-redux';
import TetherComponent from 'react-tether';
import EmojiPicker from '../components/EmojiPicker';

class EmojiButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen } = this.state;

    return (
      <TetherComponent
        attachment='top center'
        offset='-10px 0px'
        constraints={[
          {
            to: 'scrollParent',
            attachment: 'together',
          },
        ]}
        renderTarget={ref => (
          <button
            ref={ref}
            onClick={() => {
              this.setState({ isOpen: !isOpen });
            }}
          >
            {isOpen? 'Close Emojis': 'Open Emojis'}
          </button>
        )}
        renderElement={ref =>
          isOpen && (
            <div ref={ref}>
                <EmojiPicker />
            </div>
          )
        }
        
      />
    );
  }
}


export default connect()(EmojiButton);