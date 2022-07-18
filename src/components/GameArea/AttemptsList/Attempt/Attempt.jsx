// packages
import React from 'react';

// components
import AttemptLetter from './AttemptLetter/AttemptLetter';

// styles
import * as S from './styles';

const Attempt = ({
  attemptNumber, 
  selected, 
  wordAttempt, 
  message
})=> {

  const displayAttemptLetters = () => [0,1,2,3,4].map(i=>
    <AttemptLetter 
      key={i} 
      attemptNumber={attemptNumber} 
      letterNumber={i} 
      selected={selected} 
      wordAttempt={wordAttempt} 
    />
  );
    
  return <S.AttemptWrapper message={selected[1] === attemptNumber && message}>
    {displayAttemptLetters()}
  </S.AttemptWrapper>
};

export default Attempt