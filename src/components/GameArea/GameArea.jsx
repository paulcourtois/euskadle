// packages
import React, { useState } from 'react';

// components
import AttemptsList from './AttemptsList';
import Keyboard from './Keyboard';

// styles
import * as S from './styles';

const GameArea = () => {
  const [selectedLetter, setSelectedLetter] = useState(0);
  const [selectedAttempt, setSelectedAttempt] = useState(0)
  const [letterValue, setLetterValue] = useState('');

  return <S.GameAreaWrapper>
    <AttemptsList selected={[selectedLetter,selectedAttempt]} currentLetterValue={letterValue} />
    <Keyboard 
      selectedLetter={selectedLetter}
      setSelectedLetter={setSelectedLetter}
      setLetterValue={setLetterValue}
      selectedAttempt={selectedAttempt}
      setSelectedAttempt={setSelectedAttempt}
    />
  </S.GameAreaWrapper>
};

export default GameArea