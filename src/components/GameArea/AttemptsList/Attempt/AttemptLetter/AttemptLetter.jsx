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
  const letterHasValue = !!(selected[1] === attemptNumber && wordAttempt[attemptNumber][letterNumber])

  return <S.LetterWrapper isLetterSelected={isLetterSelected} letterHasValue={letterHasValue}>
    {wordAttempt[attemptNumber][letterNumber]}
  </S.LetterWrapper>
};

export default AttemptLetter