import styled from "styled-components";
import { v } from "../../../styles/variable";

export const SLayout = styled.div`
    display: flex;
`

export const SMain = styled.div`
    padding: 20px;
    width: 100%;
    background: ${({theme})=> theme.bg3};
    color: ${({theme})=> theme.bg};
    
`