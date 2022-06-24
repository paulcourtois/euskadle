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
h1 {
    font-weight: normal;
    font-family: Carter One, sans-serif;
}
`
const BodyWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #010101;
    display: flex;
    flex-direction: column;
`;

export {
    GlobalStyle,
    BodyWrapper,
};

