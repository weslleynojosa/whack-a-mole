import styled from "styled-components";
import { Button, Header } from "./Global.styled";


export const Board = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background: #000;
    color: #FFF;
    text-transform: uppercase;
`

export const Head = styled(Header)`
    flex-direction: row;
    margin: 0 0 30px;
`

export const NewGame = styled(Button)`
    font-size: 1.4em;

    :hover {
        color: #e3ca16;
    }
`

export const Table = styled.table`
    width: 80%;
    text-align: center;
    font-size: 1em;

    td {
        font-size: 2em;
        padding-top: 10px
    }
`