// packages
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';

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
  const [selectedAttempt, setSelectedAttempt] = useState(0);
  const [wordAttempt, setWordAttempt] = useState( [
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
  const {t} = useTranslation();
  const language = useSelector(state=>state.language);

  useEffect(()=> {
    wordAttempt[0].word && localStorage.setItem('attempts', JSON.stringify(wordAttempt))
    console.log(JSON.parse(localStorage.getItem('attempts')))
  }, [wordAttempt])
  useEffect(()=> {
    console.log('init', JSON.parse(localStorage.getItem('attempts')))
    setWordAttempt(JSON.parse(localStorage.getItem('attempts')));
    setSelectedAttempt(JSON.parse(localStorage.getItem('attempts')).findIndex(element => !element.word))
  },[])
  useEffect(()=>{
    if (gameState !== 'running'){
      let timer1 = setTimeout(()=>{
        setShowModal(true)
        setModalContent(Endgame({gameState, selectedAttempt,t, language}))
    },2001);
    return () => {
      clearTimeout(timer1);
    };
    } 
  }, [gameState, selectedAttempt, setModalContent, setShowModal])
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