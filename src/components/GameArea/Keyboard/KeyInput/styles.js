import styled from 'styled-components';
import styleHelper from './helpers/styleHelper';

const Key = styled.div`
  height: 50px;
  width: ${props=> props.value.length > 1 ? '64px' : '30px'};
  @media (max-width: 1250px) {
    height: 40px;
  };
  margin: 5px 2px;
  background-color: ${props=> styleHelper.setKeyboardBabckgroundcolor(props)};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  opacity: ${props=> props.state === 'notInWord' && 0.5};

  @media (hover: hover){
    :hover{
      background-color: ${props=> styleHelper.setKeyboardBabckgroundcolor(props)}80;
    }
  }
`;

export {
  Key
};

export default Key