// packages
import React, { useEffect, useState } from 'react';

// components
import AttemptsList from './AttemptsList';
import Keyboard from './Keyboard';
import ErrorMessage from './ErrorMessage';

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
    <ErrorMessage message={'Entrez un mot de 5 lettres'} />
    <AttemptsList selected={[selectedLetter,selectedAttempt]} wordAttempt={wordAttempt} />
    <Keyboard 
      selectedLetter={selectedLetter}
      setSelectedLetter={setSelectedLetter}
      selectedAttempt={selectedAttempt}
      setSelectedAttempt={setSelectedAttempt}
      wordAttempt={wordAttempt}
      setWordAttempt={setWordAttempt}
      setGameState={setGameState}
      disabled={gameState !== 'running'}
    />
  </S.GameAreaWrapper>
};

export default GameArea