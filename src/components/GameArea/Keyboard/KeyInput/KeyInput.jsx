// packages
import React from 'react';

// styles
import * as S from './styles';

// assets 
import enterIcon from '../../../../images/enter.svg';
import deleteIcon from '../../../../images/delete.svg';

// helper
import gameHelper from '../../helpers/gameHelper';

const KeyInput = ({letter,
  selectedLetter,
  setSelectedLetter,
  selectedAttempt,
  setSelectedAttempt,
  wordAttempt,
  setWordAttempt,
  setGameState,
  disabled
}) => {

  const setKeyContent = (key) => {
    if (key === 'enter'){
      return <img src={enterIcon} alt="Enter key" height="20px" width="20px"/>
    };
    if (key === 'return'){
      return <img src={deleteIcon} alt="Delete key" height="20px" width="20px"/>
    }
    else return key
  };

  return <S.Key onClick={()=> !disabled && gameHelper
    .handleKeyPressOrKeyboardInput(
      letter, 
      selectedLetter, 
      setSelectedLetter, 
      selectedAttempt, 
      setSelectedAttempt,
      wordAttempt,
      setWordAttempt,
      setGameState
    )}
    value={letter}
    tabIndex="0"   onKeyDown={(event)=> console.log(event)}
    >
    {setKeyContent(letter)}
  </S.Key>
};

export default KeyInput