import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, 
body,
#___gatsby {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
`
const BodyWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0e0e0f;
    display: flex;
    flex-direction: column;
`;

export {
    GlobalStyle,
    BodyWrapper,
};

