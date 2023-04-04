import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        display: block;
        font-family: 'Press Start 2P', cursive;
        background-image: url('/assets/WAM_bg.jpg');
        background-size: cover;
    }
`

export default GlobalStyles