const setLetterBorderColor = (letterProps) => {
  if (letterProps.isLetterSelected){
    return "#1d9b47"
  }
  if (letterProps.letterHasValue){
    return  "#50505d"
  }
  else return "#33333b"
}

const styleHelper = {
  setLetterBorderColor
};

export default styleHelper