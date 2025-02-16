import * as React from "react";
import { S } from "./Menu_Styles";


export const Menu: React.FC = () => {
    return (
        <S.Menu>
            <ul>
                <li>
                    <S.Link href='#home'>Home</S.Link>
                </li>

                <li>
                    <S.Link href='#about'>About</S.Link>
                </li>

                <li>
                    <S.Link href='#stack'>Tech Stack</S.Link>
                </li>

                <li>
                    <S.Link href='#projects'>Projects</S.Link>
                </li>

                <li>
                    <S.Link href='#contact'>Contact</S.Link>
                </li>
            </ul>
        </S.Menu>
    );
};