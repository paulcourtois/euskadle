import styled from 'styled-components';

const LetterWrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${props=>props.isLetterSelected ? "#1d9b47" : "#33333b"};
  margin: 0 5px;
  border-radius: 8px;
`
export {
  LetterWrapper
};

export default LetterWrapper;