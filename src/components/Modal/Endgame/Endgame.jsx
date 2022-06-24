// packages
import React from 'react';
import wordsHelper from '../../GameArea/helpers/wordsHelper';

// styles
import * as S from './styles';

const Endgame = ({gameState, selectedAttempt, wordAttempt}) => {
  return <>
  <S.EndgameTitle>
    {gameState === "victory" ? 'Bravo !' : 'Raté...'}
  </S.EndgameTitle>
  {gameState === "victory" 
  ? <S.EndgameText>
  Vous avez trouvé en <span>{selectedAttempt + 1} essai{selectedAttempt + 1 > 1 && 's'}</span> !
 </S.EndgameText>
  :<S.EndgameText>
    Vous ferez mieux la prochaine fois !
  </S.EndgameText> }
   <S.EndgameText>
    Le mot était <span>{wordsHelper.setWordOfTheDay().basqueWord.toUpperCase()}</span>.
   </S.EndgameText>
   <S.EndgameText>
    En langue basque, cela signifie: <span>{wordsHelper.setWordOfTheDay().frenchTranslation.toUpperCase()}</span>
   </S.EndgameText>
  </>
};

export default Endgame