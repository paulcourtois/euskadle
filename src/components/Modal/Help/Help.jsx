// packages
import React from 'react';

// styles
import * as S from '../styles';

// components
import Attempt from '../../GameArea/AttemptsList/Attempt'
import AttemptLetter from '../../GameArea/AttemptsList/Attempt/AttemptLetter/AttemptLetter';

const Help = () => {
  return <>
    <S.ModalSubtitle>
    Règles du jeu
    </S.ModalSubtitle>
    <S.ModalText>
      Euskadle reprend le concept du jeu télévisé Motus, remis au goût du jour par des applications récentes comme <S.ModalLink href={'https://www.nytimes.com/games/wordle/index.html'} target="_blank">Wordle</S.ModalLink> et son équivalent français <S.ModalLink href={'https://wordle.louan.me/'} target="_blank">Le Mot</S.ModalLink>.
    </S.ModalText>
    <S.ModalText>
      Vous avez 6 essais pour deviner le mot du jour.
      Après avoir tapé un mot valide, la couleur des lettres change pour indiquer leur présence dans le mot.
    </S.ModalText>
    <S.ModalSubtitle>
    Exemples
    </S.ModalSubtitle>
    <Attempt attemptNumber={0} wordAttempt={[{word: 'ABARO', status:['placed']}]} selected={[1,1]}>
      <AttemptLetter attemptNumber={0} letterNumber={0} wordAttempt={[{word: 'ABARO', status:['placed']}]} selected={[1,1]}/>
      <AttemptLetter attemptNumber={0} letterNumber={1} wordAttempt={[{word: 'ABARO', status:['placed']}]} selected={[1,1]}/>
      <AttemptLetter attemptNumber={0} letterNumber={2} wordAttempt={[{word: 'ABARO', status:['placed']}]} selected={[1,1]}/>
      <AttemptLetter attemptNumber={0} letterNumber={3} wordAttempt={[{word: 'ABARO', status:['placed']}]} selected={[1,1]}/>
      <AttemptLetter attemptNumber={0} letterNumber={4} wordAttempt={[{word: 'ABARO', status:['placed']}]} selected={[1,1]}/>
    </Attempt>
    <S.ModalText>
      Si la lettre devient verte, elle est présente dans le mot et bien placée.
    </S.ModalText>
    <Attempt attemptNumber={0} wordAttempt={[{word: 'NAHAR', status:['', 'inWord', '', 'inWord']}]} selected={[1,1]}>
      <AttemptLetter attemptNumber={0} letterNumber={0} wordAttempt={[{word: 'NAHAR', status:['', 'inWord', '', 'inWord']}]} selected={[1,1]}/>
      <AttemptLetter attemptNumber={0} letterNumber={1} wordAttempt={[{word: 'NAHAR', status:['', 'inWord', '', 'inWord']}]} selected={[1,1]}/>
      <AttemptLetter attemptNumber={0} letterNumber={2} wordAttempt={[{word: 'NAHAR', status:['', 'inWord', '', 'inWord']}]} selected={[1,1]}/>
      <AttemptLetter attemptNumber={0} letterNumber={3} wordAttempt={[{word: 'NAHAR', status:['', 'inWord', '', 'inWord']}]} selected={[1,1]}/>
      <AttemptLetter attemptNumber={0} letterNumber={4} wordAttempt={[{word: 'NAHAR', status:['', 'inWord', '', 'inWord']}]} selected={[1,1]}/>
    </Attempt>
    <S.ModalText>
      Si la lettre devient orange, elle est présente dans le mot mais elle n'est pas à la bonne position.
    </S.ModalText>
    <Attempt attemptNumber={0} wordAttempt={[{word: 'OIHAN', status:['notinWord']}]} selected={[1,1]}>
      <AttemptLetter attemptNumber={0} letterNumber={0} wordAttempt={[{word: 'OIHAN', status:['notinWord']}]} selected={[1,1]}/>
      <AttemptLetter attemptNumber={0} letterNumber={1} wordAttempt={[{word: 'OIHAN', status:['notinWord']}]} selected={[1,1]}/>
      <AttemptLetter attemptNumber={0} letterNumber={2} wordAttempt={[{word: 'OIHAN', status:['notinWord']}]} selected={[1,1]}/>
      <AttemptLetter attemptNumber={0} letterNumber={3} wordAttempt={[{word: 'OIHAN', status:['notinWord']}]} selected={[1,1]}/>
      <AttemptLetter attemptNumber={0} letterNumber={4} wordAttempt={[{word: 'OIHAN', status:['notinWord']}]} selected={[1,1]}/>
    </Attempt>
    <S.ModalText>
      Si la lettre devient grise, elle n'est pas présente dans le mot du jour.
    </S.ModalText>
  </>
};

export default Help