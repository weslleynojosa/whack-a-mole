import styled from "styled-components";
import { Button, Div } from "./Global.styled";

export const StartScreen = styled(Div)`
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
`

export const GoToLeaderboard = styled.header`
    align-self: flex-end;
    margin: 20px 20px 0 0;
    color: #000;

    a:link { text-decoration: none; }
    a:visited { 
        text-decoration: none;
        color: #000;
    }
    a:active {
        color: #000;
    }
    a:focus-visible {
        outline: none;
    }
`

export const GameTitle = styled(Div)`
    flex-direction: column;
    align-items: center;

    img {
        width: 200px;
    }
`

export const Title = styled.span`
    font-size: 3em;
    text-align: center;
`

export const StartGame = styled(Button)`
    align-self: center;
    margin-bottom: 40px;
    padding: 20px 35px;
    font-size: 2.5em;
    text-transform: uppercase;
    background: #0cc70c;
    border: solid 3px #000;
    border-radius: 28px;
`