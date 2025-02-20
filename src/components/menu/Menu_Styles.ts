import styled from "styled-components";
import {globalTheme} from "../../styles/GlobalTheme.tsx";
import {Link} from "react-scroll";

const Menu = styled.nav`
    ul {
        display: flex;
        gap: 50px;
        flex-wrap: wrap;
    }
`
const LinkMenu = styled(Link)`
    display: inline-block;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
    color: ${({ theme }) => theme.colors.menuItem};
    white-space: nowrap;
    cursor: pointer;
    transition: ${globalTheme.transition};

    &:hover, &.active {
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transform: scale(1.07) translateY(-2px);
        
    }

    @media ${globalTheme.media.tablet} {
        &:hover {
            transform: none;
            background: transparent;
            background-clip: unset;
            -webkit-background-clip: unset;
            -webkit-text-fill-color: unset;
        }
    }

`

export const S = {
    Menu,
    LinkMenu,
}