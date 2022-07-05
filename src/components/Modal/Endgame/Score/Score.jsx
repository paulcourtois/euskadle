// packages
import React from 'react';

// styles
import * as S from '../styles';

const Score = ({t, selectedAttempt}) => {
  const currentScore = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('score'));
  const numberOfGames = currentScore.reduce(
    (previousValue, currentValue) => previousValue + currentValue
    );
  const subtitle = t('endgame.victory_interval', {postProcess: 'interval',count: (numberOfGames - currentScore[6])}) 
  + ' / '
  + t('endgame.defeat_interval', {postProcess: 'interval',count: (currentScore[6])})

  
  return <S.ScoreWrapper>
    <S.EndgameTitle>Scores</S.EndgameTitle>
    <S.EndgameText>
      {subtitle}
    </S.EndgameText>

    {currentScore.map((score,index )=>{
          const winPercent = (score / numberOfGames)*100
      return <S.Scoreline key={index}>
        <p>{index === 6 ? 'X' : index + 1}</p>
        <S.ScoreBar 
        index={index} 
        winPercent={winPercent} 
        title={`${parseInt(winPercent)}%`}
        currentGameResult={(index === 6 && localStorage.getItem('gameState') === 'loss') || (localStorage.getItem('gameState') !== 'loss' && index === selectedAttempt)}
        >
          <div><S.Score>{score}</S.Score></div>
        </S.ScoreBar>
      </S.Scoreline>
    })}
  </S.ScoreWrapper>
};

export default Score