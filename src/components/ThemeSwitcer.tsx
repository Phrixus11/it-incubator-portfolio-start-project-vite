import React from "react";
import { useTheme } from "./../styles/ThemeContext.tsx";
import styled from "styled-components";

const ThemeSwitcher: React.FC = () => {
    const { toggleTheme } = useTheme();

    return <ToggleThemeButton onClick={toggleTheme}></ToggleThemeButton>;
};

export default ThemeSwitcher;


const ToggleThemeButton = styled.button`
    display: block;
    padding-left: 15px;
    cursor: pointer;
    z-index: 99999;

    &::after {
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        background-repeat: no-repeat;
        background-image: url("${({theme}) => theme.colors.buttonImg}");
    }
`