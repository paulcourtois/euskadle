// packages
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

// components 
import Header from './Header';
import GameArea from './GameArea';
import Modal from './Modal';

import changeLanguage from '../translations/i18n';
// styles 
import * as S from './styles';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  const language = useSelector((state)=> state.language)
  useEffect(()=>{
    changeLanguage(language || 'french')
  },[language])

    return <S.BodyWrapper>
        <S.GlobalStyle />
        <Header setShowModal={setShowModal} setModalContent={setModalContent}/>
        <GameArea setShowModal={setShowModal} setModalContent={setModalContent}/>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          {modalContent}
        </Modal>
    </S.BodyWrapper>
};

export default App