import wordsHelper from './wordsHelper';

const handleLetterKeyPress = (keyValue, selectedAttempt, selectedLetter, setSelectedLetter, setWordAttempt ) => {
  if (selectedLetter < 5){
    setWordAttempt(word=> {
      let words = [...word];
      let wordToModify = word[selectedAttempt].concat(keyValue);
      words[selectedAttempt] = wordToModify;
      return words
    })
    setSelectedLetter(selectedLetter + 1);
  }
};

const goToNextAttempt = (setSelectedAttempt, setSelectedLetter) => {
  setSelectedAttempt(attempt=> attempt + 1);
  setSelectedLetter(0)
}

const handleEnterKeyPress = (wordToCheck, selectedAttempt, setSelectedAttempt, setSelectedLetter, setGameState)=> {
  let wordExist;
  let wordIsRight;
  console.log(wordsHelper)
  if (wordToCheck.length === 5){
    wordExist = wordsHelper.checkIfWordExist(wordToCheck.toLowerCase())
  };
  if (!wordExist){
    // TODO : MESSAGE ERREUR LE MOT N'EXISTE PAS
  }
  if (wordExist){
    wordIsRight = wordsHelper.checkIfAttemptIsCorrect(wordToCheck);
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
    let wordToModify = word[selectedAttempt].slice(0, -1);
    words[selectedAttempt] = wordToModify;
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
  setGameState
  ) => {
    if (keyValue === "enter"){
      return handleEnterKeyPress(wordAttempt[selectedAttempt], selectedAttempt, setSelectedAttempt, setSelectedLetter, setGameState)
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