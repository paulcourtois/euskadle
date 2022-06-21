// packages
import React from 'react';

// components
import KeyInput from './KeyInput';

// styles
import * as S from './styles';

const Keyboard = ({
  selectedLetter,
      setSelectedLetter,
      selectedAttempt,
      setSelectedAttempt,
      wordAttempt,
      setWordAttempt,
      setGameState
}) => {
  const azertyMapping = [
    ['A','Z','E','R','T','Y','U','I','O','P'],
    ['Q','S','D','F','G','H','J','K','L','M'],
    ['return','W','X','C','V','B','N', 'enter']
  ]
  const displayKeyboard = (mapping) => mapping.map(azertyLine => <S.KeyboardLine key={azertyLine[0]}>
    {azertyLine.map(azertyKey=> <KeyInput 
    key={azertyKey}
    letter={azertyKey} 
    selectedLetter={selectedLetter}
      setSelectedLetter={setSelectedLetter}
    selectedAttempt={selectedAttempt}
    setSelectedAttempt={setSelectedAttempt}
    wordAttempt={wordAttempt}
    setWordAttempt={setWordAttempt}
    setGameState={setGameState}
     />)}
  </S.KeyboardLine>)
  
  return <S.KeyboardWrapper>
    {displayKeyboard(azertyMapping)}
  </S.KeyboardWrapper>
};

export default Keyboard