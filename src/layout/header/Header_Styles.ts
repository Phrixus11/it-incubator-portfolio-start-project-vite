import styled from "styled-components";
import {globalTheme} from "../../styles/GlobalTheme.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";


const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${globalTheme.colors.primaryBg};
    z-index: 999;
    overflow: clip;
    
    & > ${Container} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 35px;
    }

    // @media ${globalTheme.media.tablet} {
    //     ${Container} > ${FlexWrapper} {
    //         display: none;
    //     }
    // }
`

export const S = {
    Header,
}