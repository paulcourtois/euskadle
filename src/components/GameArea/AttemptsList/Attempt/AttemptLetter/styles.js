import styled from 'styled-components';
import styleHelper from './helpers/styleHelper';

const LetterWrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${props=> styleHelper.setLetterBorderColor(props)};
  margin: 0 5px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`
export {
  LetterWrapper
};

export default LetterWrapper;