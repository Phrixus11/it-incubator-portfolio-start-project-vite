import styled from "styled-components";
import {globalTheme} from "../styles/GlobalTheme.tsx";

export const SectionTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    line-height: 0.54167;
    text-align: center;
    color: ${globalTheme.colors.title};
    margin-top: 100px;
`