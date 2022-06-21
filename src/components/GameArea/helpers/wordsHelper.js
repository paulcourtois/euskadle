// 5 letters words list
import validWords from '../../../../../euskarra-dico/5LettersBasqueWords.json';

const checkIfWordExist = (word) => {
  console.log(validWords)
  return !!validWords.find(wordInList => wordInList.basqueWord === word)
}

const getNumberInsideInterval =(input)=>{
  return Math.floor((input/ 100000000) * (validWords.length + 1))
};

const setWordOfTheDay = () => {
  let today = new Date()
  let numberForToday = Number('' + today.getUTCDate() + today.getUTCFullYear() + today.getUTCMonth());
  console.log('WotD', validWords[getNumberInsideInterval(numberForToday)].basqueWord)
  return validWords[getNumberInsideInterval(numberForToday)].basqueWord
}

const checkIfAttemptIsCorrect = (word) => {
  return word === setWordOfTheDay()
};

const wordsHelper = {
  checkIfWordExist,
  checkIfAttemptIsCorrect
};

export default wordsHelper