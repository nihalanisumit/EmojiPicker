import { combineReducers } from 'redux';
import { SET_EMOJI } from './actions';

const initialState = {
    setEmoji: '😀'
}
let emojiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMOJI :
            return { ...state,
                setEmoji: action.payload,
            }
        default :
            return state
    }
}

export default combineReducers({
    emoji: emojiReducer
});