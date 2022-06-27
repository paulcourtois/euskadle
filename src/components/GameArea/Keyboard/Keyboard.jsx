// packages
import React, {useEffect} from 'react';

// components
import KeyInput from './KeyInput';

// helper
import gameHelper from '../../helpers/gameHelper';

// styles
import * as S from './styles';

const Keyboard = ({
  selectedLetter,
      setSelectedLetter,
      selectedAttempt,
      setSelectedAttempt,
      wordAttempt,
      setWordAttempt,
      setGameState,
      disabled,
      setErrorMessage
}) => {
  const azertyMapping = [
    ['A','Z','E','R','T','Y','U','I','O','P'],
    ['Q','S','D','F','G','H','J','K','L','M'],
    ['return','W','X','C','V','B','N', 'enter']
  ];
  const handleKeyboardInput = (keyboardEvent) => {
    const typedKey = (keyboardEvent.key === 'Backspace' && 'return')
    || (keyboardEvent.key === 'Enter' && 'enter') 
    || keyboardEvent.key.length === 1 && ((/[a-zA-Z]/).test(keyboardEvent.key) && keyboardEvent.key.toUpperCase())
   !disabled && typedKey && gameHelper
 .handleKeyPressOrKeyboardInput(
   typedKey, 
   selectedLetter, 
   setSelectedLetter, 
   selectedAttempt, 
   setSelectedAttempt,
   wordAttempt,
   setWordAttempt,
   setGameState,
   setErrorMessage
 )
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboardInput);
    return () => {
        window.removeEventListener("keydown", handleKeyboardInput);
    };
}, [handleKeyboardInput]);

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
    disabled={disabled}
    setErrorMessage={setErrorMessage}
     />)}
  </S.KeyboardLine>)
  
  return <S.KeyboardWrapper>
    {displayKeyboard(azertyMapping)}
  </S.KeyboardWrapper>
};

export default Keyboard