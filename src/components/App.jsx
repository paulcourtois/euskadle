// packages
import React from 'react';

// components 
import Header from './Header';
import GameArea from './GameArea';

// styles 
import * as S from './styles';

const App = () => {
    return <S.BodyWrapper>
        <S.GlobalStyle whiteColor />
        <Header />
        <GameArea />
    </S.BodyWrapper>
};

export default App