// packages
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';
import moment from 'moment';

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
  const [gameState, setGameState] = useState( typeof window !== 'undefined' && localStorage.getItem('gameState') || 'running');
  const [errorMessage, setErrorMessage] = useState('');
  const {t} = useTranslation();
  const language = useSelector(state=>state.language);
  console.log(gameState)
  useEffect(()=> {
    wordAttempt[0].word && localStorage.setItem('attempts', JSON.stringify(wordAttempt))
  }, [selectedAttempt, gameState])
  useEffect(()=> {
    console.log('yo',localStorage.getItem('lastVisit'))

    if(!localStorage.getItem('score')){
      localStorage.setItem('score',JSON.stringify([0,0,0,0,0,0,0]))
    }
    if (moment().diff(localStorage.getItem('lastVisit'), 'days') >= 1) {
      setGameState('running')
      const clearStorage = () => {
        localStorage.removeItem('gameState');
        localStorage.removeItem('attempts');
      }
      typeof window !== 'undefined' && clearStorage()
    } else{
      localStorage.getItem('attempts') && setWordAttempt(JSON.parse(localStorage.getItem('attempts')));
      console.log(    localStorage.getItem('attempts') && JSON.parse(localStorage.getItem('attempts')).findIndex(element => !element.word)
      )
      if (gameState !== 'running'){
        setSelectedLetter(6)
        setSelectedAttempt(JSON.parse(localStorage.getItem('attempts')).findIndex(element => !element.word) - 1)
      } else {
        localStorage.getItem('attempts') && setSelectedAttempt(JSON.parse(localStorage.getItem('attempts')).findIndex(element => !element.word))
      }

    }
  
    localStorage.setItem('lastVisit', moment())

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