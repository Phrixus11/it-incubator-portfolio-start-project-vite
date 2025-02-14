import styled from "styled-components";
import {globalTheme} from "../styles/GlobalTheme.tsx";

export const Container = styled.div`
    max-width: 1330px;
    width: 100%;
    min-height: 100%;
    padding: 0 45px;
    margin: 0 auto;
    //border: 1px solid red;
    
    @media ${globalTheme.media.tablet} {
        padding: 0 15px;
    }
`