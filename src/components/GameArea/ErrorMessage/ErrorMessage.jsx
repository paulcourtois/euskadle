// packages
import React from 'react';
import { useEffect } from 'react';

// styles
import * as S from './styles.js';

const ErrorMessage = ({message,setErrorMessage}) => {
  useEffect(() => {
    let timer1 = setTimeout(()=>setErrorMessage(''),2001);
    return () => {
      clearTimeout(timer1);
    };
  },[message])
  return <S.Message message={message}>
    <p>{message}</p>
  </S.Message>
};

export default ErrorMessage
