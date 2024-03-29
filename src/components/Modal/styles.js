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
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #212126;
  border-radius: 8px;
  padding: 5px 15px;
  opacity: 1;
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ModalCloseButton = styled.button`
position: absolute;
top: 10px;
border-radius: 8px;
color: white;
height: 30px;
width: 30px;
display: flex;
align-items: center;
justify-content: center;
background-color: #212126;
cursor: pointer;
border-style: solid;
:hover {
    background-color:#50505d;
    border-color: #010101;
}
`;

const ModalSubtitle = styled.h3`
  font-weight: bold;
  color: white;
`;

const ModalText = styled.p`
  color:#656474;
`;

const ModalLink = styled.a`
  text-decoration: unset;
  color: white;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 10px;
`
export {
  ModalBackground,
  ModalWrapper,
  ModalHeader,
  ModalCloseButton,
  ModalSubtitle,
  ModalText,
  ModalLink,
  IconContainer
}