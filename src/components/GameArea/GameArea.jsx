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

  return <S.GameAreaWrapper>
    <AttemptsList selected={[selectedLetter,selectedAttempt]}/>
    <Keyboard />
  </S.GameAreaWrapper>
};

export default GameArea