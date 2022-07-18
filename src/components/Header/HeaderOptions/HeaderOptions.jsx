// packages
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

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
	
	const openModalWithContent = (modalContent) => {
		setShowModal(true);
		setModalContent(modalContent)
	};

	return <S.OptionsWrapper>
		<OptionButton 
			clickHandler={()=> openModalWithContent(<Help t={t}/>)} 
			icon={help} 
			tooltip={t('tooltips.help')} 
		/>
		<OptionButton 
			clickHandler={()=>openModalWithContent(<Settings dispatch={dispatch} t={t}/>)} 
			icon={settings} 
			tooltip={t('tooltips.settings')} 
		/>
	</S.OptionsWrapper>
};

export default HeaderOptions