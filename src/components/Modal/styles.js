import styled from 'styled-components';

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position:absolute;
  top:0;
  left:0;
  background-color:  #01010190;
`
const ModalWrapper = styled.div`
  max-width: 500px;
  width: fit-content;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #151518;
  border-radius: 8px;
  padding: 15px;
  opacity: 1;
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

`;

const ModalCloseButton = styled.button`
border-radius: 8px;
`;


export {
  ModalBackground,
  ModalWrapper,
  ModalHeader,
  ModalCloseButton,
}