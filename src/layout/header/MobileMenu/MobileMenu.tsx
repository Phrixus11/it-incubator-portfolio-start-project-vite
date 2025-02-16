import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Menu} from "../../../components/menu/Menu.tsx";
import {SocialLink} from "../../../components/socialLink/SocialLink.tsx";
import {useState} from "react";
import * as React from "react";
import { S } from "./MobileMenu_Styles.ts";


export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerClick = () => { setMenuIsOpen(!menuIsOpen) };

    return (
        <div>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenu isOpen={menuIsOpen} onClick={onBurgerClick}>
                <S.MobileMenuContainer>
                    <FlexWrapper direction={'column'} gap={'50px'} alignItems={'center'} justifyContent={'center'} wrap={'wrap'}>
                        <Menu/>
                        <SocialLink/>
                    </FlexWrapper>
                </S.MobileMenuContainer>
            </S.MobileMenu>
        </div>
    );
};