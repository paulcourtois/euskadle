// packages
import React, { useEffect, useState } from 'react';

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
  disabled,
  setErrorMessage
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

  const [currentLetterState,setCurrentLetterState] = useState();
  useEffect(()=>{
    let lettersState = [];
    wordAttempt.forEach(entry=> entry.status.forEach((state,index)=> lettersState.push({
      letter: entry.word[index],
      state
    })));
    console.log(lettersState.find(letterUsed=> letterUsed.letter === letter))
    setCurrentLetterState(lettersState.find(letterUsed=> letterUsed.letter === letter))
  }, [wordAttempt])
  console.log(currentLetterState)

  return <S.Key onClick={()=> !disabled && gameHelper
    .handleKeyPressOrKeyboardInput(
      letter, 
      selectedLetter, 
      setSelectedLetter, 
      selectedAttempt, 
      setSelectedAttempt,
      wordAttempt,
      setWordAttempt,
      setGameState,
      setErrorMessage
    )}
    value={letter}
    state={currentLetterState?.state}
    >
    {setKeyContent(letter)}
  </S.Key>
};

export default KeyInput