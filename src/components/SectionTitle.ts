import styled from "styled-components";
import {globalTheme} from "../styles/GlobalTheme.tsx";
import {font} from "../styles/Commons.ts";

export const SectionTitle = styled.h2`
    ${font({weight: 700, lineHeight: 0.54167, Fmax: 48, Fmin: 30})}

    text-align: center;
    color: ${globalTheme.colors.title};
    margin-top: 100px;
`