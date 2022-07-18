// packages
import React from 'react';
import { useTranslation } from 'react-i18next';

// styles
import * as S from '../styles';

// components
import Attempt from '../../GameArea/AttemptsList/Attempt'
import AttemptLetter from '../../GameArea/AttemptsList/Attempt/AttemptLetter/AttemptLetter';

const Help = () => {
  const {t} = useTranslation()

  const displayExampleWord = (capitalWord, statusArray) => capitalWord.split('').map((letter,index)=>
    <AttemptLetter 
      key={letter}
      attemptNumber={0} 
      letterNumber={index} 
      wordAttempt={[{word: capitalWord, status: statusArray}]}
      selected={[1,1]}
    />
  );
  
  return <>
    <S.ModalSubtitle>
      {t('help.subtitle')}
    </S.ModalSubtitle>
    <S.ModalText>
      {t('help.concept')}
      <S.ModalLink href={'https://www.nytimes.com/games/wordle/index.html'} target="_blank">
        Wordle
      </S.ModalLink>
      {t('help.frenchEquivalent')}
      <S.ModalLink href={'https://wordle.louan.me/'} target="_blank">
        Le Mot
      </S.ModalLink>
    </S.ModalText>
    <S.ModalText>
      {t('help.rules')}
    </S.ModalText>
    <S.ModalSubtitle>
      {t('help.examplesTitle')}
    </S.ModalSubtitle>
    <Attempt attemptNumber={0} wordAttempt={[{word: 'ABARO', status:['placed']}]} selected={[1,1]}>
      {displayExampleWord('ABARO', ['placed'])}
    </Attempt>
    <S.ModalText>
      {t('help.examplePlaced')}
    </S.ModalText>
    <Attempt attemptNumber={0} wordAttempt={[{word: 'NAHAR', status:['', 'inWord', '', 'inWord']}]} selected={[1,1]}>
      {displayExampleWord('NAHAR', ['', 'inWord', '', 'inWord'])}
    </Attempt>
    <S.ModalText>
      {t('help.exampleInWord')}
    </S.ModalText>
    <Attempt attemptNumber={0} wordAttempt={[{word: 'OIHAN', status:['notinWord']}]} selected={[1,1]}>
     {displayExampleWord('OIHAN', ['notinWord'])}
    </Attempt>
    <S.ModalText>
      {t('help.exampleNotInWord')}
    </S.ModalText>
  </>
};

export default Help