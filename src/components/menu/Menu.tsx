import {S} from "./Menu_Styles";
import * as React from "react";

type MobileMenuPropsType = {
    click?: () => void;
}

export const Menu: React.FC<MobileMenuPropsType> = ({click}) => {

    console.log("рендер")

    return (
        <S.Menu>
            <ul>
                <li>
                    <S.LinkMenu onClick={click}
                                activeClass="active"
                                spy={true}
                                to='home'
                                smooth={true}
                                offset={-150}>Home</S.LinkMenu>
                </li>

                <li>
                    <S.LinkMenu onClick={click}
                                activeClass="active"
                                spy={true}
                                to='about'
                                smooth={true}
                                offset={-150}>About</S.LinkMenu>
                </li>

                <li>
                    <S.LinkMenu onClick={click}
                                activeClass="active"
                                spy={true}
                                to='stack'
                                smooth={true}
                                >Tech Stack</S.LinkMenu>
                </li>

                <li>
                    <S.LinkMenu onClick={click}
                                activeClass="active"
                                spy={true}
                                to='projects'
                                smooth={true}
                                offset={50}>Projects</S.LinkMenu>
                </li>

                <li>
                    <S.LinkMenu onClick={click}
                                activeClass="active"
                                spy={true}
                                to='contact'
                                smooth={true}
                                offset={50}>Contact</S.LinkMenu>
                </li>
            </ul>
        </S.Menu>
    );
};