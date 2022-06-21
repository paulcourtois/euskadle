// packages
import React from 'react';

// styles
import * as S from './styles';

// helper
import gameHelper from '../../helpers/gameHelper';

const KeyInput = ({letter,
  selectedLetter,
  setSelectedLetter,
  setLetterValue,
  selectedAttempt,
  setSelectedAttempt,}) => {

  console.log(gameHelper)

  return <S.Key onClick={()=>gameHelper.handleKeyPressOrKeyboardInput(letter, setLetterValue, selectedLetter, setSelectedLetter, selectedAttempt, setSelectedAttempt)}>
    {letter}
  </S.Key>
};

export default KeyInput