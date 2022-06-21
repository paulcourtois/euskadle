import styled from 'styled-components';
import styleHelper from './helpers/styleHelper';

const Key = styled.div`
  height: 50px;
  width: ${props=> props.value.length > 1 ? '64px' : '30px'};
  margin: 5px 2px;
  background-color: ${props=> styleHelper.setKeyboardBabckgroundcolor(props.value)};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  :hover{
    background-color: ${props=> styleHelper.setKeyboardBabckgroundcolor(props.value)}80;
  }
`;

export {
  Key
};

export default Key