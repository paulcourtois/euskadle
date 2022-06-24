// packages
import React from 'react';
import ReactDOM from 'react-dom';

// styles
import * as S from './styles';

const Modal = ({showModal, setShowModal, children}) => {
  const handleBackgroundClick= (event)=>{
    event.stopPropagation();
    event.preventDefault();
    setShowModal(false);
  }
  return showModal && ReactDOM.createPortal(
  <S.ModalBackground onClick={handleBackgroundClick}>
    <S.ModalWrapper onClick={(e)=>e.stopPropagation()}>
      <S.ModalHeader>
        <S.ModalCloseButton onClick={()=>setShowModal(false)}>X</S.ModalCloseButton>
      </S.ModalHeader>
        {children}
    </S.ModalWrapper>
  </S.ModalBackground>, document.body
  )
};

export default Modal