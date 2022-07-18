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

  const {t} = useTranslation();

  // current attempt and letter position
  const [selectedLetter, setSelectedLetter] = useState(0);
  const [selectedAttempt, setSelectedAttempt] = useState(0);

  // attempts for today's word
  const [wordAttempt, setWordAttempt] = useState([
    {
      word: '',
      status: []
    },
    {
      word: '',
      status: []
    },
    {
      word: '',
      status: []
    },
    {
      word: '',
      status: []
    },
    {
      word: '',
      status: []
    },
    {
      word: '',
      status: []
    }
  ]);

  // state of today's game
  const [gameState, setGameState] = useState( (typeof window !== 'undefined' && localStorage.getItem('gameState')) || 'running');

  // latest error message displayed
  const [errorMessage, setErrorMessage] = useState('');

  // selected language from store
  const language = useSelector(state=>state.language);

  // words attempts from local storage
  const wordsInStorage = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('attempts'))
  // save current attempts to local storage so user can't clear board with reload 
  useEffect(()=> {
    const arrayToSave = wordAttempt.map(attempt=> {
      if (attempt.status.length> 0) {
        return attempt
      } else {
        return { word: '', status: []}
      }
    })
    wordAttempt[0].word && localStorage.setItem('attempts', JSON.stringify(arrayToSave))
  }, [selectedAttempt, gameState, wordAttempt]);

  useEffect(()=> {
    // on first page load, create score, show rules
    if(!localStorage.getItem('score')){
      setShowModal(true)
      setModalContent(<Help />)
      localStorage.setItem('score',JSON.stringify([0,0,0,0,0,0,0]))
    };
    // restart game everyday to play with new word
    if (!moment().isSame(moment.ISO_8601(localStorage.getItem('lastVisit')), 'day')) {
      setGameState('running')
      const clearStorage = () => {
        localStorage.removeItem('gameState');
        localStorage.removeItem('attempts');
      }
      typeof window !== 'undefined' && clearStorage()
    } else {
      // if not new day and game running, get back previous attempts
      localStorage.getItem('attempts') && setWordAttempt(wordsInStorage);
    }
      // if game was over, user can't play anymore
      if (localStorage.getItem('gameState') && localStorage.getItem('gameState') !== 'running'){
        setSelectedLetter(6)
        const attemptAccordingToGameState = gameState === 'victory' ? 5 : 6
        setSelectedAttempt(wordsInStorage.findIndex(element => !element.word) !== -1 ? wordsInStorage.findIndex(element => !element.word) - 1 : attemptAccordingToGameState )
      } else {
        // if game was running, go back to current attempt
        localStorage.getItem('attempts') && setSelectedAttempt(wordsInStorage.findIndex(element => !element.word))
      }
    localStorage.setItem('lastVisit', moment())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  // show results when game is over
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
    <AttemptsList 
      selected={[selectedLetter,selectedAttempt]} 
      wordAttempt={wordAttempt} 
      message={errorMessage}
    />
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