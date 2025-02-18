import * as React from "react";
import {S} from "./Menu_Styles";
import {useEffect} from "react";
import {Events, scrollSpy} from "react-scroll";


type MobileMenuPropsType = {
    click?: () => void;
}

export const Menu: React.FC<MobileMenuPropsType> = ({click}) => {
    useEffect(() => {
        Events.scrollEvent.register("begin", () => console.log("Начало скролла"));
        Events.scrollEvent.register("end", () => console.log("Конец скролла"));

        scrollSpy.update(); // Обновляем отслеживание активных элементов

        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

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
                                smooth={true}>Tech Stack</S.LinkMenu>
                </li>

                <li>
                    <S.LinkMenu onClick={click}
                                activeClass="active"
                                spy={true}
                                to='projects'
                                smooth={true}>Projects</S.LinkMenu>
                </li>

                <li>
                    <S.LinkMenu onClick={click}
                                activeClass="active"
                                spy={true}
                                to='contact'
                                smooth={true}
                                offset={-150}>Contact</S.LinkMenu>
                </li>
            </ul>
        </S.Menu>
    );
};