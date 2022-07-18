import styled from 'styled-components';
import flag from '../../images/flag.svg'

const HeaderWrapper = styled.header`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    background-color: #212126;
`;

const HeaderContent = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const MainTitle = styled.h1`
    padding-left: 20px;
    background-image: url(${flag});
    background-position: center;
    background-size: contain;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export {
    HeaderWrapper,
    HeaderContent,
    MainTitle
};

