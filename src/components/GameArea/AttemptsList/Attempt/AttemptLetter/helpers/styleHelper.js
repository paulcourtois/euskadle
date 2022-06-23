const setLetterBorderColor = (letterProps) => {
  if (letterProps.letterStatus){
    const status = {
      placed: "#1d9b47",
      inWord: "#fc9303",
      notInWord: "#33333b"
    }
    return status[letterProps.letterStatus]
  }
  if (letterProps.isLetterSelected){
    return "#1d9b47"
  }
  if (letterProps.letterHasValue){
    return  "#50505d"
  }
  else return "#33333b"
};

const setLetterBackgroundColor = (letterStatus) => {
  if (letterStatus){
    const status = {
      placed: "#1d9b47",
      inWord: "#fc9303",
      notInWord: "#33333b"
    }
    return status[letterStatus]
  } else return 'black'
}

const styleHelper = {
  setLetterBorderColor,
  setLetterBackgroundColor
};

export default styleHelper