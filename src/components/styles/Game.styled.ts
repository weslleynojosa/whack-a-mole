import styled from "styled-components";
import { Div, Header } from "./Global.styled";

export const Main = styled(Div)`
    position: relative;
    flex-direction: column;
    align-items: center;
`

export const Area = styled.div`
    width: 600px;
    height: 400px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    grid-auto-rows: 1fr;
`

export const Panel = styled(Header)`
    display: flex;
    width: 80%;
    height: 100px;
    margin: 20px auto 50px;
    justify-content: space-between;
    align-items: center;
`

export const Score = styled(Div)`
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.span`
    color: #000;
    font-size: 1em;
    margin-bottom: 10px;
`

export const StopWatch = styled(Title)`
    font-size: 1.5em;
    z-index: 1;
`

export const Points = styled(Title)`
    color: #ff0000;
    font-size: 1.3em;
`


