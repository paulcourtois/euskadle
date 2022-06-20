// packages
import React from 'react';

// components
import KeyInput from './KeyInput';

// styles
import * as S from './styles';

const Keyboard = () => {
  const azertyMapping = [
    ['A','Z','E','R','T','Y','U','I','O','P'],
    ['Q','S','D','F','G','H','J','K','L','M'],
    ['W','X','C','V','B','N']
  ]
  const displayKeyboard = (mapping) => mapping.map(azertyLine => <S.KeyboardLine>
    {azertyLine.map(azertyKey=> <KeyInput letter={azertyKey} />)}
  </S.KeyboardLine>)
  
  return <S.KeyboardWrapper>
    {displayKeyboard(azertyMapping)}
  </S.KeyboardWrapper>
};

export default Keyboard