const setKeyboardBabckgroundcolor = (letterValue) => {
  if (letterValue ==='enter'){
    return "#1d9b47"
  }
  if (letterValue === 'return'){
    return  "#D52B1E"
  }
  else return "#50505d"
}

const styleHelper = {
  setKeyboardBabckgroundcolor
};

export default styleHelper