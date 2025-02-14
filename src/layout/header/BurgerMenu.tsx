import styled, {css} from "styled-components";
import {globalTheme} from "../../styles/GlobalTheme.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {SocialLink} from "../../components/socialLink/SocialLink.tsx";
import {useState} from "react";


export const BurgerMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerClick = () => { setMenuIsOpen(!menuIsOpen) };
    return (
        <div>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerClick}>
                <span></span>
            </BurgerButton>
            <StyledBergerMenu isOpen={menuIsOpen} onClick={onBurgerClick}>
                <MobileMenu>
                    <FlexWrapper direction={'column'} gap={'50px'} alignItems={'center'} justifyContent={'center'} wrap={'wrap'}>
                        <Menu/>
                        <SocialLink/>
                    </FlexWrapper>
                </MobileMenu>
            </StyledBergerMenu>
        </div>

    );
};

const StyledBergerMenu = styled.div<{isOpen: boolean}>`
    display: block;
    background-color: ${globalTheme.colors.primaryBg};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    transform: translateX(-100%);
    transition: transform .2s;

    ${({ isOpen }) => isOpen && css`
        transform: translateX(0); 
    `};
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    display: none;
    width: 50px;
    height: 50px;
    top: 40px;
    right: 50px;
    z-index: 99999;

    span {
        display: block;
        margin: auto;
        width: 36px;
        height: 3px;
        border-radius: 5px;
        background-color: ${globalTheme.colors.title};

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
            background-color: ${globalTheme.colors.title};
            transition: transform .2s;
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
            background-color: ${globalTheme.colors.title};
            transition: transform .3s;
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

const MobileMenu = styled.div`
    height: 100vh;
    ul {
        flex-direction: column;
    }
    

`