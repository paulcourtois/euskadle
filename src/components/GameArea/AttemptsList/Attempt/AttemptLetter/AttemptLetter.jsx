// packages
import React, { useEffect, useState } from 'react';

import * as S from './styles';

const AttemptLetter = ({
  attemptNumber,
  letterNumber, 
  wordAttempt, 
  selected
}) => {
  const isLetterSelected = selected[0] === letterNumber && selected[1] === attemptNumber;

  return <S.LetterWrapper isLetterSelected={isLetterSelected} letterHasValue={!!(selected[1] === attemptNumber && wordAttempt[letterNumber])}>
    {wordAttempt[attemptNumber][letterNumber]}
  </S.LetterWrapper>
};

export default AttemptLetter