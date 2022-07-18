// packages
import React from 'react';

// styles
import * as S from './styles';

const OptionButton = ({
	clickHandler,
	icon, 
	tooltip,
	selected
}) => <S.Button onClick={clickHandler} title={tooltip} selected={selected}>
		<img src={icon} alt={tooltip} height="20px" width="20px"/>
</S.Button>


export default OptionButton;