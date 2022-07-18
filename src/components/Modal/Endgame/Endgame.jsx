// packages
import React from 'react';

// components
import Score from './Score'
// helper
import wordsHelper from '../../helpers/wordsHelper';

// styles
import * as S from './styles';

const Endgame = ({
    gameState, 
    selectedAttempt, 
    t, 
    language
  }) => <>
  <S.EndgameTitle>
    {gameState === "victory" ? t('endgame.win') : t('endgame.loss')}
  </S.EndgameTitle>
    {gameState === "victory" 
    ? <S.EndgameText>
      {t('endgame.foundIn')} <span>{t('endgame.numberOfTries_interval', {postProcess: 'interval',count: (selectedAttempt + 1)})}</span> !
    </S.EndgameText>
    :<S.EndgameText>
      {t('endgame.doBetter')}  
    </S.EndgameText> 
    }
   <S.EndgameText>
    {t('endgame.wordWas')}
    <span>
      {wordsHelper.setWordOfTheDay().basqueWord.toUpperCase()}
    </span>.
   </S.EndgameText>
   <S.EndgameText>
    {t('endgame.basqueTranslation')}
    <span>
      {(language === 'french') 
      ? wordsHelper.setWordOfTheDay().frenchTranslation.toUpperCase()
      : wordsHelper.setWordOfTheDay().spanishTranslation.toUpperCase()
      }
    </span>.
   </S.EndgameText>
   <Score t={t} selectedAttempt={selectedAttempt}/>
  </>;

export default Endgame