// packages
import React, {useState} from 'react';

// components 
import Header from './Header';
import GameArea from './GameArea';
import Modal from './Modal';

// styles 
import * as S from './styles';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();
    return <S.BodyWrapper>
        <S.GlobalStyle />
        <Header setShowModal={setShowModal} setModalContent={setModalContent}/>
        <GameArea setShowModal={setShowModal} setModalContent={setModalContent}/>
        {<Modal showModal={showModal} setShowModal={setShowModal}>
          {modalContent}
        </Modal>}
    </S.BodyWrapper>
};

export default App