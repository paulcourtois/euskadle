// packages
import React from 'react';
import {useDispatch} from 'react-redux';

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
    const dispatch = useDispatch()
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
            setModalContent(<Settings dispatch={dispatch}/>)
        }} 
        icon={settings} 
        tooltip={"Options"} />
       
    </S.OptionsWrapper>
};

export default HeaderOptions