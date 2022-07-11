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
import Help from '../Modal/Help';

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
  const [gameState, setGameState] = useState( (typeof window !== 'undefined' && localStorage.getItem('gameState')) || 'running');
  console.log('GS', gameState)

  const [errorMessage, setErrorMessage] = useState('');
  const {t} = useTranslation();
  const language = useSelector(state=>state.language);
  const wordsInStorage = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('attempts'))
  console.log('test', wordsInStorage)
    console.log(typeof window)
  useEffect(()=> {
    wordAttempt[0].word && localStorage.setItem('attempts', JSON.stringify(wordAttempt))
  }, [selectedAttempt, gameState, wordAttempt])
  useEffect(()=> {
    console.log('TIMER', moment().isSame(localStorage.getItem('lastVisit'), 'day'))
    if(!localStorage.getItem('score')){
      setShowModal(true)
      setModalContent(<Help />)
      localStorage.setItem('score',JSON.stringify([0,0,0,0,0,0,0]))
    }
    if (!moment().isSame(localStorage.getItem('lastVisit'), 'day')) {
      setGameState('running')
      const clearStorage = () => {
        localStorage.removeItem('gameState');
        localStorage.removeItem('attempts');
      }
      typeof window !== 'undefined' && clearStorage()
    } else{
      localStorage.getItem('attempts') && setWordAttempt(wordsInStorage);
    }
      if (localStorage.getItem('gameState') && localStorage.getItem('gameState') !== 'running'){
        setSelectedLetter(6)
        const attemptAccordingToGameState = gameState === 'victory' ? 5 : 6
        setSelectedAttempt(wordsInStorage.findIndex(element => !element.word) !== -1 ? wordsInStorage.findIndex(element => !element.word) - 1 : attemptAccordingToGameState )
      } else {
        localStorage.getItem('attempts') && setSelectedAttempt(wordsInStorage.findIndex(element => !element.word))
      }
    localStorage.setItem('lastVisit', moment())
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [gameState, selectedAttempt, setModalContent, setShowModal, language, t])

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