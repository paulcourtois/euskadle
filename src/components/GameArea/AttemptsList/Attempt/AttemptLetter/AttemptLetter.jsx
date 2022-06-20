// packages
import React from 'react';

import * as S from './styles';

const AttemptLetter = ({
  attemptNumber,
  letterNumber, 
  value, 
  selected
}) => {
  const isLetterSelected = selected[0] === letterNumber && selected[1] === attemptNumber;
  return <S.LetterWrapper isLetterSelected={isLetterSelected}>
    {value}
  </S.LetterWrapper>
};

export default AttemptLetter