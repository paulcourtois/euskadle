// packages
import React from 'react';

// components
import Attempt from './Attempt';

// styles
import * as S from './styles';

const AttemptsList = ({selected, wordAttempt, message}) => {
  const displayAttempts = ()=> [0,1,2,3,4].map(i=><Attempt key={i} attemptNumber={i} selected={selected} wordAttempt={wordAttempt} message={message}/>)

  return <S.AttemptsWrapper>
    {displayAttempts()}
    </S.AttemptsWrapper>
};

export default AttemptsList