// packages
import React, { useEffect, useState } from 'react';

import * as S from './styles';

const AttemptLetter = ({
  attemptNumber,
  letterNumber, 
  currentLetterValue, 
  selected
}) => {
  const isLetterSelected = selected[0] === letterNumber && selected[1] === attemptNumber;
  const [letterValue, setLetterValue] = useState('');
  useEffect(()=> {
    selected[0] - 1 === letterNumber && selected[1] === attemptNumber && setLetterValue(currentLetterValue)
  }, [currentLetterValue]);

  return <S.LetterWrapper isLetterSelected={isLetterSelected} letterHasValue={!!letterValue}>
    {letterValue}
  </S.LetterWrapper>
};

export default AttemptLetter