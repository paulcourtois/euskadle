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
  setGameState
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

  return <S.Key onClick={()=>gameHelper
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
    >
    {setKeyContent(letter)}
  </S.Key>
};

export default KeyInput