// packages
import React from 'react';

// components 
import OptionButton from './OptionButton';

// assets 
import settings from '../../../images/settings.svg';
import about from '../../../images/about.svg';

// styles 
import * as S from './styles';

const HeaderOptions = () => {
    return <S.OptionsWrapper>
        <OptionButton clickHandler={()=>{}} icon={settings} tooltip={"Réglages"} />
        <OptionButton clickHandler={()=>{}} icon={about} tooltip={"A propos"} />
    </S.OptionsWrapper>
};

export default HeaderOptions