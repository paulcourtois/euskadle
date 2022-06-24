import wordsHelper from './wordsHelper';

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


const handleEnterKeyPress = (wordToCheck, selectedAttempt, setSelectedAttempt, setSelectedLetter, setGameState, setWordAttempt, setErrorMessage)=> {
  let wordExist;
  let wordIsRight;
  if (wordToCheck.length <5){
   return setErrorMessage("Entrez un mot de 5 lettres")
  };
  if (wordToCheck.length === 5){
    wordExist = wordsHelper.checkIfWordExist(wordToCheck);
  };
  if (!wordExist){
    return setErrorMessage("Désolé ce mot n'existe pas !")
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
      setGameState('victory')
    } else selectedAttempt < 5 
      ? goToNextAttempt(setSelectedAttempt, setSelectedLetter)
      : setGameState('loss')// MESSAGE DE DEFAITE
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
  setErrorMessage
  ) => {
    if (keyValue === "enter"){
      return handleEnterKeyPress(wordAttempt[selectedAttempt].word, selectedAttempt, setSelectedAttempt, setSelectedLetter, setGameState, setWordAttempt, setErrorMessage)
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