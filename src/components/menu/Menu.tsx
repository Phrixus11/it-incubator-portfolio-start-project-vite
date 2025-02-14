import styled from "styled-components";
import {globalTheme} from "../../styles/GlobalTheme.tsx";


export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <Link href='#home'>Home</Link>
                </li>

                <li>
                    <Link href='#about'>About</Link>
                </li>

                <li>
                    <Link href='#stack'>Tech Stack</Link>
                </li>

                <li>
                    <Link href='#projects'>Projects</Link>
                </li>

                <li>
                    <Link href='#contact'>Contact</Link>
                </li>
            </ul>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
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