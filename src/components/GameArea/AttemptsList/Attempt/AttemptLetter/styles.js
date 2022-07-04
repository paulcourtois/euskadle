import styled, {keyframes, css} from 'styled-components';
import styleHelper from './helpers/styleHelper';

const letterAnimation = keyframes`
  0% {
    transform: rotateX(0deg)
  }
  100% {
    transform: rotateX(180deg)
  }
}
`

const animation = props => props.letterStatus &&
  css`
    ${letterAnimation} 0.45s linear ${0.25 * props.letterNumber}s;
  `

const LetterWrapper = styled.div`
  width: 50px;
  height: 50px;
  @media (max-width: 1250px) {
    width: 40px;
    height: 40px;
  };
  @media (max-width: 800px) {
    width: 32px;
    height: 32px;
  };
  border: 3px solid ${props=> styleHelper.setLetterBorderColor(props)};
  background-color: ${props=> styleHelper.setLetterBackgroundColor(props.letterStatus)};
  transition-delay: ${props=> `${(0.25 * props.letterNumber) + 0.25}s`};
  transition-property: background-color;
  margin: 0 5px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${animation};
`

const Letter = styled.p`
  animation: ${animation};
  color: white;
  font-weight: bold;
`;

export {
  LetterWrapper,
  Letter
};

export default LetterWrapper;