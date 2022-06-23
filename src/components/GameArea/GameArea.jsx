// packages
import React, { useEffect, useState } from 'react';

// components
import AttemptsList from './AttemptsList';
import Keyboard from './Keyboard';

// styles
import * as S from './styles';

const GameArea = () => {
  const [selectedLetter, setSelectedLetter] = useState(0);
  const [selectedAttempt, setSelectedAttempt] = useState(0)
  const [wordAttempt, setWordAttempt] = useState([
    {
      word: '',
      status: []
    },{
      word: '',
      status: []
    },{
      word: '',
      status: []
    },{
      word: '',
      status: []
    },{
      word: '',
      status: []
    },]);
  const [gameState, setGameState] = useState('running');

  console.log(wordAttempt, 'test')
  return <S.GameAreaWrapper>
    <AttemptsList selected={[selectedLetter,selectedAttempt]} wordAttempt={wordAttempt} />
    <Keyboard 
      selectedLetter={selectedLetter}
      setSelectedLetter={setSelectedLetter}
      selectedAttempt={selectedAttempt}
      setSelectedAttempt={setSelectedAttempt}
      wordAttempt={wordAttempt}
      setWordAttempt={setWordAttempt}
      setGameState={setGameState}
    />
  </S.GameAreaWrapper>
};

export default GameArea