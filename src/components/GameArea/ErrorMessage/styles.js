import styled, { keyframes,css } from 'styled-components';

const messageAnimation = keyframes`
  0% {
   visibility: visible;
   opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    visibility:hidden;
    opacity: 0;
  }
}
`

const animation = props => props.message &&
  css`
    ${messageAnimation} 1.5s linear ;
  `

const Message = styled.div`
  background-color: #ece0d7;
  width: 25%;
  text-align: center;
  border-radius: 8px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  visibility:hidden;
  animation: ${animation};
`;

export {
  Message
};

export default Message