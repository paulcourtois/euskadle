// packages
import React from 'react';

// components
import Attempt from './Attempt';

// styles
import * as S from './styles';

const AttemptsList = ({selected, currentLetterValue}) => {
  const displayAttempts = ()=> [0,1,2,3,4].map(i=><Attempt attemptNumber={i} selected={selected} currentLetterValue={currentLetterValue}/>)

  
  return <S.AttemptsWrapper>
    {displayAttempts()}
    </S.AttemptsWrapper>
};

export default AttemptsList