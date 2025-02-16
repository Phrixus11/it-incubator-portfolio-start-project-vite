import styled from "styled-components";
import {globalTheme} from "../../styles/GlobalTheme.tsx";

const Menu = styled.nav`
    ul {
        display: flex;
        gap: 50px;
        flex-wrap: wrap;
    }
`
const Link = styled.a`
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
    color: ${globalTheme.colors.menuItem};
    white-space: nowrap;
`

export const S = {
    Menu,
    Link,
}