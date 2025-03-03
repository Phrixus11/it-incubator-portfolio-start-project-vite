import styled from "styled-components";
import {globalTheme} from "../styles/GlobalTheme.tsx";
import {font} from "../styles/Commons.ts";

export const TextTitle = styled.p`
    ${font({weight: 400, Fmax: 32, Fmin: 22 })}
    
    text-align: center;
    color: ${({theme})=> theme.colors.titleDescription};
    margin-top: 50px;
    margin-bottom: 113px;

    @media ${globalTheme.media.tablet} {
        margin-top: 40px;
        margin-bottom: 80px;
    }
`