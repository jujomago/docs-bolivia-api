import React from 'react';
import Emoji  from 'react-emoji-render';
//import { Emojione } from 'react-emoji-render';
const EmojiText = ({ text }) => {
  return <Emoji text={text} />;
  //return <Emojione text={text} />;
};

export default EmojiText;