// packages
import React from 'react';

// styles
import * as S from './styles.js';

const ErrorMessage = ({message}) => {
  return <S.Message>
    <p>{message}</p>
  </S.Message>
};

export default ErrorMessage
