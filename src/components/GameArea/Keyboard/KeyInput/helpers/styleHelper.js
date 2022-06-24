const setKeyboardBabckgroundcolor = (props) => {
  if (props.state === 'inWord') {
    return "#fc9303"
  }
  if (props.state === 'placed') {
    return "#1d9b47"
  }
  if (props.value === 'return'){
    return  "#D52B1E"
  }
  else return "#50505d"
}

const styleHelper = {
  setKeyboardBabckgroundcolor
};

export default styleHelper