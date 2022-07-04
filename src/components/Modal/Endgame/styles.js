import styled from 'styled-components';

const EndgameTitle = styled.h2`
  text-align: center;
  color: white;
`;

const EndgameText = styled.p`
  color:#656474;
  text-align: center;
  >span {
    color: white;
  }
`;

const ScoreWrapper = styled.div`
  width: 100%;
`;

const Scoreline = styled.div`
  margin-bottom: 5px;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 18px;
  >p{
    width: 20px;
    text-align: center;
  }
`

const ScoreBar = styled.div`
  width: 70%;
  height: 100%;
  >div {
    height: 100%;
    width: ${props=>props.winPercent ? 10 + props.winPercent : '10'}%;
    background-color: ${props=> props.currentGameResult ? '#1D9B47':'white'};    
    text-align: right;
    position: relative;
    border-radius: 6px;
  }
`

const Score = styled.p`
  position:absolute;
  top: -50%;
  right: 0;
  transform: translateY(-50%);
  color:black;
  padding: 5px;
`
export {
  EndgameTitle,
  EndgameText,
  ScoreWrapper,
  Scoreline,
  ScoreBar,
  Score
}