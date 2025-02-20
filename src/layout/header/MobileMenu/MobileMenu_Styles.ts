import {globalTheme} from "../../../styles/GlobalTheme.tsx";
import styled, {css} from "styled-components";

const MobileMenu = styled.div<{isOpen: boolean}>`
    display: block;
    background-color: ${({theme}) => theme.colors.themeColor};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    opacity: 0.9;
    transform: translateX(100%);
    transition: ${globalTheme.transition};

    ${({ isOpen }) => isOpen && css`
        transform: translateX(0); 
    `};
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    display: none;
    width: 50px;
    height: 50px;
    top: 37px;
    right: 85px;

    z-index: 99999;

    span {
        display: block;
        margin: auto;
        width: 36px;
        height: 3px;
        border-radius: 5px;
        background-color: ${({theme}) => theme.colors.title};

        position: relative;

        ${({isOpen}) => isOpen && css`
            background-color: rgba(255, 255, 255, 0);
        `};

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 3px;
            border-radius: 5px;
            background-color: ${({theme}) => theme.colors.title};
            transition: ${globalTheme.transition};
            position: absolute;
            top: -10px;

            ${({isOpen}) => isOpen && css`
                transform: rotate(45deg);
                top: 0;
            `};
        }

        &::after {
            content: "";
            display: block;
            width: 36px;
            height: 3px;
            border-radius: 5px;
            background-color: ${({theme}) => theme.colors.title};
            transition: ${globalTheme.transition};
            position: absolute;
            bottom: -10px;

            ${({isOpen}) => isOpen && css`
                transform: rotate(-45deg);
                bottom: 0;
            `};
        }
    }

    @media ${globalTheme.media.tablet} {
        display: block;
    }
`

const MobileMenuContainer = styled.div`
    height: 100vh;

    ul {
        flex-direction: column;
    }
`

export const S = {
    MobileMenu,
    BurgerButton,
    MobileMenuContainer
}