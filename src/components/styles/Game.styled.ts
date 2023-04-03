import styled from "styled-components";

export const Main = styled.div`
    background-image: url('/assets/WAM_bg.jpg');
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
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