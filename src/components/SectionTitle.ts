import styled from "styled-components";
import {font} from "../styles/Commons.ts";

export const SectionTitle = styled.h2`
    ${font({weight: 700, lineHeight: 0.54167, Fmax: 48, Fmin: 30})}

    text-align: center;
    color: ${({theme})=> theme.colors.title};
`