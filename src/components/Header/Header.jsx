// packages
import React from 'react';

// components
import HeaderOptions from './HeaderOptions';

// styles
import * as S from './styles';


const Header = ({setShowModal, setModalContent}) => {
	return <S.HeaderWrapper>
		<S.HeaderContent>
			<S.MainTitle>
				EUSKADLE
			</S.MainTitle>
			<HeaderOptions setShowModal={setShowModal} setModalContent={setModalContent} />
		</S.HeaderContent>
	</S.HeaderWrapper>
};

export default Header