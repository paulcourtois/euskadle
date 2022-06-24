// packages
import React, { useState } from 'react';

// components
import AttemptsList from './AttemptsList';
import Keyboard from './Keyboard';
import ErrorMessage from './ErrorMessage';
import Endgame from '../Modal/Endgame';

// styles
import * as S from './styles';
import { useEffect } from 'react';

const GameArea = ({
  setShowModal,
  setModalContent
}) => {
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
    },
    {
      word: '',
      status: []
    },]);
  const [gameState, setGameState] = useState('running');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(()=>{
    if (gameState !== 'running'){
      let timer1 = setTimeout(()=>{
        setShowModal(true)
        setModalContent(Endgame({gameState, selectedAttempt, wordAttempt}))
    },2001);
    return () => {
      clearTimeout(timer1);
    };
    } 
  }, [gameState, selectedAttempt, setModalContent, setShowModal, wordAttempt])
  return <S.GameAreaWrapper>
    <ErrorMessage message={errorMessage} setErrorMessage={setErrorMessage}/>
    <AttemptsList selected={[selectedLetter,selectedAttempt]} wordAttempt={wordAttempt} message={errorMessage} />
    <Keyboard 
      selectedLetter={selectedLetter}
      setSelectedLetter={setSelectedLetter}
      selectedAttempt={selectedAttempt}
      setSelectedAttempt={setSelectedAttempt}
      wordAttempt={wordAttempt}
      setWordAttempt={setWordAttempt}
      setGameState={setGameState}
      disabled={gameState !== 'running'}
      setErrorMessage={setErrorMessage}
    />
  </S.GameAreaWrapper>
};

export default GameArea