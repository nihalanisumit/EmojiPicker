import unicodeMap from 'emoji-unicode-map';

const unicodeMapper = (emoji) => {
    return unicodeMap.get(emoji) || ''
}

export default unicodeMapper;