import styled from 'styled-components';

const Button = styled.button`
    height: 37px;
    width: 37px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #212126;
    cursor: pointer;
    border-style: solid;
    :hover {
        background-color:#50505d;
        border-color: #010101;
    }
`;

export {
    Button
};

export default Button;