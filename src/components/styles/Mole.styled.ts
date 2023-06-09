import styled from "styled-components";
import { Img } from "./Global.styled";

export const MoleBtn = styled.button`
    width: 100%;
    height:100%;
    background: none;
    border: none;
    position: relative;
    display: flex;
    align-items: flex-end;  

    :focus-visible {
        outline: none;
    }
`

export const Hammer = styled(Img)`
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
`

export const MoleImg = styled(Img)`
    width: 100%;
`