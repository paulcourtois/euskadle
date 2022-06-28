// packages
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation } from 'react-i18next';

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
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const currentLanguage = useSelector(state=>state.language)
    console.log(currentLanguage)
    
    const handleClickOnSettings = () => {
        setShowModal(true);
        setModalContent(<Settings dispatch={dispatch} t={t}/>)
    }
    return <S.OptionsWrapper>
         <OptionButton 
        clickHandler={()=>{
            setShowModal(true);
            setModalContent(<Help t={t}/>)
        }} 
         icon={help} 
         tooltip={"Aide"} />
        <OptionButton 
        clickHandler={handleClickOnSettings} 
        icon={settings} 
        tooltip={"Options"} />
       
    </S.OptionsWrapper>
};

export default HeaderOptions