import styled from "styled-components";
import {globalTheme} from "../styles/GlobalTheme.tsx";

export const TextTitle = styled.h2`
    font-weight: 400;
    font-size: 32px;
    line-height: 0.8125;
    text-align: center;
    color: ${globalTheme.colors.titleText};
    margin-top: 50px;
    margin-bottom: 140px;
`