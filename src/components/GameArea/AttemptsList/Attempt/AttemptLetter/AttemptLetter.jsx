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
  const letterHasValue = !!(selected[1] === attemptNumber && wordAttempt[attemptNumber].word[letterNumber]);
  const letterStatus = wordAttempt[attemptNumber].status[letterNumber]

  return <S.LetterWrapper 
    isLetterSelected={isLetterSelected} 
    letterHasValue={letterHasValue}
    letterStatus={letterStatus}
    letterNumber={letterNumber}
  >
    <S.Letter
    letterStatus={letterStatus}
    letterNumber={letterNumber}
    >{wordAttempt[attemptNumber].word[letterNumber]}</S.Letter>
  </S.LetterWrapper>
};

export default AttemptLetter