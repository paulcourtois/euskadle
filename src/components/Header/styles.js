import styled from 'styled-components';

const HeaderWrapper = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #151518;
`;

const HeaderContent = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const MainTitle = styled.h1`
    color: white;
    padding-left: 20px;
`
export {
    HeaderWrapper,
    HeaderContent,
    MainTitle
};

