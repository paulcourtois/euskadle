import styled, {keyframes, css} from 'styled-components';

const lineAnimation = keyframes`
0% { transform: translateX(0) }
 25% { transform: translateX(10px) }
 50% { transform: translateX(-10px) }
 75% { transform: translateX(10px) }
 100% { transform: translateX(0) }
`

const animation = props => props.message &&
  css`
    ${lineAnimation} .5s linear ;
  `


const AttemptWrapper = styled.div`
  display: flex;
  margin: 5px auto;
  animation: ${animation};
`;

export {AttemptWrapper};
export default AttemptWrapper;