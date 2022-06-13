// packages
import React from 'react';

// styles
import * as S from './styles';

const OptionButton = ({
     clickHandler,
     icon, 
     tooltip
    }) => {
    return <S.Button onClick={clickHandler} title={tooltip}>
        <img src={icon} alt={tooltip} height="20px" width="20px"/>
    </S.Button>
}

export default OptionButton;