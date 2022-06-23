// 5 letters words list
import validWords from '../../../../../euskarra-dico/5LettersBasqueWords.json';
import shuffledWords from '../../../../../euskarra-dico/shuffled5LettersWords.json';
import moment from 'moment';

const setWordOfTheDay = () => {
  const gameStart = moment("2022-06-23 00:01");
  const today = moment();
  const currentDayNumber = today.diff(gameStart, 'days');
  const wordIndex = currentDayNumber % validWords.length;
  const wordOfTheDay = shuffledWords[wordIndex]
  console.log('WOTD', wordOfTheDay)
  return wordOfTheDay
}
const checkLetters = (word) => {
  const wordAsArray = word.split('');
  const wordOfTheDayAsArray = setWordOfTheDay().basqueWord.toUpperCase().split('');

  return wordAsArray.map((letter, index)=>{
    const isLetterInWord = wordOfTheDayAsArray.includes(letter)
    if (isLetterInWord){
      const isLetterWellPlaced = letter === wordOfTheDayAsArray[index];
      return isLetterWellPlaced ? "placed" : "inWord" 
    } else return "notInWord"
  });
};

const checkIfWordExist = (word) => {
  return !!validWords.find(wordInList => wordInList.basqueWord === word.toLowerCase())
};

const checkIfAttemptIsCorrect = (word) => {
  return word.toLowerCase() === setWordOfTheDay().basqueWord
};

const wordsHelper = {
  checkLetters,
  checkIfWordExist,
  checkIfAttemptIsCorrect,
};

export default wordsHelper