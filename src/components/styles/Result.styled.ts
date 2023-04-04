import styled from "styled-components";
import { Title } from "./Game.styled";
import { Button, Div } from "./Global.styled";

export const Result = styled(Div)`
    background: #000000f2;
    position: absolute;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const HighScore = styled(Title)`
    color: #FFF;
    margin: 30px auto 20px;
    font-size: 2em;
`

export const MaxScore = styled(Title)`
    color: #FFF;
    margin-bottom: 1em;
    font-size: 8em;
`

export const Hint = styled(Title)`
    margin-top: 10px;
    color: #FFF;
`

export const Name = styled.input`
    padding: 10px 5px;
    width: calc(3*(1ch + 5px));
    font-size: 6em;
    font-family: 'Press Start 2P', cursive;
    text-transform: uppercase;
    letter-spacing:5px;
    color: #FFF;
    background: repeating-linear-gradient(to right, #FFF 0 1ch,transparent 1ch calc(1ch + 5px))
    bottom/100% 5px content-box no-repeat;
    border: none;

    :focus {
        outline: none
    }
`

export const Next = styled(Button)`
    border: 3px solid #e15252;
    background: #ff0808;
    margin: 2.5em;
    padding: 20px 30px;
    font-size: 2em;
    border-radius: 28px;
`
