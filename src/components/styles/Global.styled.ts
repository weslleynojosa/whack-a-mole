import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        display: block;
        font-family: 'Press Start 2P', cursive;
        background-image: url('/assets/WAM_bg.jpg');
        background-size: cover;
        height: 100vh;
        width: 100vw;
    }
`

export const Div = styled.div`
    display: flex;
`

export const Button = styled.button`
    border: none;
    background: none;
    color: #FFF;
    font-family: 'Press Start 2P', cursive;
    cursor: pointer;
`

export const Header = styled.header`
    display: flex;
    width: 80%;
    height: 100px;
    margin: 20px auto 50px;
    justify-content: space-between;
    align-items: center;

`

export const Img = styled.img`
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
`

export default GlobalStyles