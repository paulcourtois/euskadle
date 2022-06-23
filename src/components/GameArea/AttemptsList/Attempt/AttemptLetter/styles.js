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
    ${letterAnimation} 0.30s linear ${0.15 * props.letterNumber}s;
  `

const LetterWrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${props=> styleHelper.setLetterBorderColor(props)};
  background-color: ${props=> styleHelper.setLetterBackgroundColor(props.letterStatus)};
  transition-delay: ${props=> `${0.15 * props.letterNumber}s`};
  transition-property: background-color;
  margin: 0 5px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${animation};
`
export {
  LetterWrapper
};

export default LetterWrapper;