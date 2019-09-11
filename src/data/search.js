import unicodeMapper from '../util/UnicodeMapper';
import {emojis} from './emojis';



const emojiNames = Object.values(emojis).flat().reduce((accumulatedEmojis, emoji)=>{
  const emojiUnicodeName = unicodeMapper(emoji);
  if(emojiUnicodeName) {
    accumulatedEmojis.push({name:emojiUnicodeName, value:emoji})
  }
  return  accumulatedEmojis;
},[]);


export default emojiNames;
