const handleLetterKeyPress = (keyValue, selectedLetter, setSelectedLetter, setLetterValue, ) => {
  if (selectedLetter < 5){
    setLetterValue(keyValue);
    setSelectedLetter(selectedLetter + 1);
  }
};

const handleSubmitKeyPress = ()=> {

};

const handleReturnKeyPress = ()=> {
  
};

const handleKeyPressOrKeyboardInput = (
  keyValue, 
  setLetterValue,
  selectedLetter,
  setSelectedLetter, 
  selectedAttempt,
  setSelectedAttempt
  ) => {
    if (keyValue === "enter"){
      handleSubmitKeyPress()
    }
    if(keyValue === "return"){
      handleReturnKeyPress()
    }
    else handleLetterKeyPress(keyValue, selectedLetter, setSelectedLetter, setLetterValue)
}

const gameHelper = {
  handleKeyPressOrKeyboardInput
}
export default gameHelper