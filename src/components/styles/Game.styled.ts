import styled from "styled-components";

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Area = styled.div`
    width: 600px;
    height: 400px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    grid-auto-rows: 1fr;
`

export const Panel = styled.div`
    display: flex;
    width: 80%;
    height: 50px;
    justify-content: space-between;
`

export const Score = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.span`
    color: #000;
    font-size: 1em;

`

export const StopWatch = styled(Title)`
    font-size: 1.5em;
`

export const Points = styled(Title)`
    color: #ff0000;
    font-size: 1.3em;
`


