// packages
import React from 'react';

// styles
import * as S from '../styles';

// assets
import frenchFlag from '../../../images/frenchFlag.svg';
import spainFlag from '../../../images/spainFlag.svg';

// components
import OptionButton from '../../Header/HeaderOptions/OptionButton';

// actions
import { changeToSpanish, changeToFrench } from '../../../store';
const Settings = ({dispatch}) => {

  return <>
    <S.ModalSubtitle>
      Paramètres de langue
    </S.ModalSubtitle>
    <S.IconContainer>
      <OptionButton icon={frenchFlag} tooltip='Français' clickHandler={()=>dispatch(changeToFrench())}/> 
      /
      <OptionButton icon={spainFlag} tooltip='Français' clickHandler={()=>dispatch(changeToSpanish())}/>
    </S.IconContainer>
    <S.ModalSubtitle>
      Crédits
    </S.ModalSubtitle>
    <S.ModalText>
      Site développé par <S.ModalLink href={'https://www.linkedin.com/in/paul-courtois/'} target="_blank">Paul Courtois</S.ModalLink>.
    </S.ModalText>
    <S.ModalText>
      Librement inspiré de <S.ModalLink href={'https://www.nytimes.com/games/wordle/index.html'} target="_blank">Wordle</S.ModalLink> et de son équivalent français <S.ModalLink href={'https://wordle.louan.me/'} target="_blank">Le Mot</S.ModalLink>.
    </S.ModalText>
    <S.ModalText>
      La liste de mots basques provient du <S.ModalLink href={'http://projetbabel.org/basque/dictionnaire.php'} target="_blank">dictionnaire étymologique basque</S.ModalLink> rédigé par <S.ModalLink href={'https://fr.wikipedia.org/wiki/Michel_Morvan_(linguiste)'} target="_blank">Michel Morvan</S.ModalLink>.
    </S.ModalText>
    <S.ModalText>
      Si vous trouvez une erreur, ou qu'un mot basque n'est pas reconnu, n'hésitez pas à me le signaler : <S.ModalLink href={'mailto:paulcourtoispaul@gmail.com'} target="_blank">paulcourtoispaul@gmail.com</S.ModalLink>
    </S.ModalText>
  </>
};

export default Settings