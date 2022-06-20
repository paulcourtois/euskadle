// packages
import React from 'react';

// styles
import * as S from './styles';

const KeyInput = ({letter,setSelectedLetter}) => {
  return <S.Key>
    {letter}
  </S.Key>
};

export default KeyInput