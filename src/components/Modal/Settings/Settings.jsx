// packages
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useTranslation } from 'react-i18next';

// styles
import * as S from '../styles';

// assets
import frenchFlag from '../../../images/frenchFlag.svg';
import spainFlag from '../../../images/spainFlag.svg';

// components
import OptionButton from '../../Header/HeaderOptions/OptionButton';

// actions
import { changeToSpanish, changeToFrench } from '../../../store';
import changeLanguage from '../../../translations/changeLanguage';

const Settings = () => {
    const {t} = useTranslation()
  const language = useSelector(state=>state.language);
  const dispatch = useDispatch()
  return <React.Fragment key={language}>
    <S.ModalSubtitle>
      {t('settings.subtitle')}
    </S.ModalSubtitle>
    <S.IconContainer>
      <OptionButton 
      icon={frenchFlag} 
      tooltip='Français' 
      clickHandler={()=>{dispatch(changeToFrench()); changeLanguage('french')}} 
      selected={language === 'french'}
      /> 
      /
      <OptionButton 
      icon={spainFlag} 
      tooltip='Espanol' 
      clickHandler={()=>{dispatch(changeToSpanish()); changeLanguage('spanish')}}
      selected={language === 'spanish'}
      />
    </S.IconContainer>
    <S.ModalSubtitle>
    {t('settings.credits')}
    </S.ModalSubtitle>
    <S.ModalText>
    {t('settings.developedBy')}
 <S.ModalLink href={'https://www.linkedin.com/in/paul-courtois/'} target="_blank">Paul Courtois</S.ModalLink>.
    </S.ModalText>
    <S.ModalText>
    {t('settings.inspiredBy')}
 <S.ModalLink href={'https://www.nytimes.com/games/wordle/index.html'} target="_blank">Wordle</S.ModalLink> 
  {t('settings.frenchEquivalent')}
  <S.ModalLink href={'https://wordle.louan.me/'} target="_blank">Le Mot</S.ModalLink>.
    </S.ModalText>
    <S.ModalText>
    {t('settings.wordsFrom')}
 <S.ModalLink href={'http://projetbabel.org/basque/dictionnaire.php'} target="_blank">     
  {t('settings.dictionnary')}
</S.ModalLink> 
{t('settings.redactedBy')}
<S.ModalLink href={'https://fr.wikipedia.org/wiki/Michel_Morvan_(linguiste)'} target="_blank">Michel Morvan</S.ModalLink>.
    </S.ModalText>
    <S.ModalText>
    {t('settings.foundError')}
 <S.ModalLink href={'mailto:paulcourtoispaul@gmail.com'} target="_blank">paulcourtoispaul@gmail.com</S.ModalLink>
    </S.ModalText>
  </React.Fragment>
};

export default Settings