// packages
import React from 'react';

// styles
import * as S from './styles';

const Settings = () => {
  return <>
    <S.SettingsSubtitle>
      Paramètres de langue
    </S.SettingsSubtitle>
    <S.SettingsText>
      Prochainement...
    </S.SettingsText>

    <S.SettingsSubtitle>
      Crédits
    </S.SettingsSubtitle>
    <S.SettingsText>
      Site développé par <S.SettingsLink href={'https://www.linkedin.com/in/paul-courtois/'} target="_blank">Paul Courtois</S.SettingsLink>.
    </S.SettingsText>
    <S.SettingsText>
      Librement inspiré de <S.SettingsLink href={'https://www.nytimes.com/games/wordle/index.html'} target="_blank">Wordle</S.SettingsLink> et de son équivalent français <S.SettingsLink href={'https://wordle.louan.me/'} target="_blank">Le Mot</S.SettingsLink>.
    </S.SettingsText>
    <S.SettingsText>
      La liste de mots basques provient du <S.SettingsLink href={'http://projetbabel.org/basque/dictionnaire.php'} target="_blank">dictionnaire étymologique basque</S.SettingsLink> rédigé par <S.SettingsLink href={'https://fr.wikipedia.org/wiki/Michel_Morvan_(linguiste)'} target="_blank">Michel Morvan</S.SettingsLink>.
    </S.SettingsText>
    <S.SettingsText>
      Si vous trouvez une erreur, ou qu'un mot basque n'est pas reconnu, n'hésitez pas à me le signaler : <S.SettingsLink href={'mailto:paulcourtoispaul@gmail.com'} target="_blank">paulcourtoispaul@gmail.com</S.SettingsLink>
    </S.SettingsText>
  </>
};

export default Settings