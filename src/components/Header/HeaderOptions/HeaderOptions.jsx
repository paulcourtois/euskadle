// packages
import React from 'react';

// components 
import OptionButton from './OptionButton';
import Settings from '../../Modal/Settings';
import Help from '../../Modal/Help';

// assets 
import settings from '../../../images/settings.svg';
import help from '../../../images/help.svg';

// styles 
import * as S from './styles';

const HeaderOptions = ({setShowModal, setModalContent}) => {
    return <S.OptionsWrapper>
         <OptionButton 
        clickHandler={()=>{
            setShowModal(true);
            setModalContent(Help)
        }} 
         icon={help} 
         tooltip={"Aide"} />
        <OptionButton 
        clickHandler={()=>{
            setShowModal(true);
            setModalContent(Settings)
        }} 
        icon={settings} 
        tooltip={"Options"} />
       
    </S.OptionsWrapper>
};

export default HeaderOptions