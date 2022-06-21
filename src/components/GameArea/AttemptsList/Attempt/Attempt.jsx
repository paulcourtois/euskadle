// packages
import React from 'react';

// components
import AttemptLetter from './AttemptLetter/AttemptLetter';

// styles
import * as S from './styles';

const Attempt = ({attemptNumber, selected, currentLetterValue})=> {
  const displayAttemptLetters = () => [0,1,2,3,4].map(i=>
    <AttemptLetter attemptNumber={attemptNumber} letterNumber={i} selected={selected} currentLetterValue={currentLetterValue} />
  )
    

  return <S.AttemptWrapper>
    {displayAttemptLetters()}
  </S.AttemptWrapper>
  
};

export default Attempt