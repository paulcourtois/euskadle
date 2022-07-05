import wordsHelper from './wordsHelper';
import i18n from '../../translations/i18n';

const handleLetterKeyPress = (keyValue, selectedAttempt, selectedLetter, setSelectedLetter, setWordAttempt ) => {
  if (selectedLetter < 5){
    setWordAttempt(word=> {
      let words = [...word];
      let wordToModify = word[selectedAttempt].word.concat(keyValue);
      words[selectedAttempt].word = wordToModify;
      return words
    })
    setSelectedLetter(selectedLetter + 1);
  }
};

const goToNextAttempt = (setSelectedAttempt, setSelectedLetter) => {
  setSelectedAttempt(attempt=> attempt + 1);
  setSelectedLetter(0)
}

const setScore = (attemptNumber, currentScore) => {
  let newScore = JSON.parse(currentScore);
  newScore = [...newScore];
  newScore[attemptNumber] = newScore[attemptNumber] + 1
  localStorage.setItem('score', JSON.stringify(newScore))
}

const handleEnterKeyPress = (wordToCheck, selectedAttempt, setSelectedAttempt, setSelectedLetter, setGameState, setWordAttempt, setErrorMessage, score)=> {
  let wordExist;
  let wordIsRight;
  if (wordToCheck.length <5){
   return setErrorMessage(i18n.t('errors.fiveLettersWords'))
  };
  if (wordToCheck.length === 5){
    wordExist = wordsHelper.checkIfWordExist(wordToCheck);
  };
  if (!wordExist){
    return setErrorMessage(i18n.t('errors.noExist'))
  }
  if (wordExist){
    wordIsRight = wordsHelper.checkIfAttemptIsCorrect(wordToCheck);
    setWordAttempt(word=> {
      let words = [...word];
      words[selectedAttempt].status = wordsHelper.checkLetters(wordToCheck, selectedAttempt)
      ;
      return words
    })
    if (wordIsRight) {
      setGameState('victory');
      setScore(selectedAttempt, score)
      
      typeof window !== 'undefined' && localStorage.setItem('gameState', 'victory');
    } else { if(selectedAttempt < 5) goToNextAttempt(setSelectedAttempt, setSelectedLetter)
      else {
        setGameState('loss');
        setScore( 6, score)
        typeof window !== 'undefined' && localStorage.setItem('gameState', 'loss');
      }
    }
      // MESSAGE DE DEFAITE
  }
};

const handleReturnKeyPress = (setWordAttempt, setSelectedLetter, selectedAttempt)=> {
  setWordAttempt(word=> {
    let words = [...word];
    let wordToModify = word[selectedAttempt].word.slice(0, -1);
    words[selectedAttempt].word = wordToModify;
    return words
  })
  setSelectedLetter(letterNumber=> letterNumber> 0 ? letterNumber - 1 : letterNumber)
};

const handleKeyPressOrKeyboardInput = (
  keyValue, 
  selectedLetter,
  setSelectedLetter, 
  selectedAttempt,
  setSelectedAttempt, 
  wordAttempt,
  setWordAttempt,
  setGameState,
  setErrorMessage,
  score
  ) => {
    if (keyValue === "enter"){
      return handleEnterKeyPress(
        wordAttempt[selectedAttempt].word,
         selectedAttempt, 
         setSelectedAttempt, 
         setSelectedLetter, 
         setGameState, 
         setWordAttempt, 
         setErrorMessage,
         score
         )
    }
    if(keyValue === "return"){
      return handleReturnKeyPress(setWordAttempt, setSelectedLetter, selectedAttempt)
    }
    else return handleLetterKeyPress(keyValue, selectedAttempt, selectedLetter, setSelectedLetter, setWordAttempt)
}

const gameHelper = {
  handleKeyPressOrKeyboardInput
}
export default gameHelper