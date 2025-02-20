import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components";
import MoonForLight from "../assets/img/moonForLight.svg"
import MoonForDark from "../assets/img/moonForDark.svg"

// Исходная тема (из globalTheme)
const lightTheme: DefaultTheme = {
    colors: {
        themeColor: '#191919',

        menuItem: '#a7a7a7',
        mainText: '#d9d9d9',

        title: '#ccc',
        titleDescription: '#a7a7a7',

        titleCard: '#ccc',
        descriptionCardProj: '#ccc',
        h4TitleCard: '#ccc',
        bgProjectCard: '#363636',
        link: '#fff',

        iconProjColor: 'white',

        message: '#100e0e',

        buttonImg: MoonForDark,
    },
};

const darkTheme: DefaultTheme = {
    colors: {
        themeColor: '#fff',

        menuItem: '#666',
        mainText: '#42446e',

        title: '#42446e',
        titleDescription: '#666',

        titleCard: '#000',
        descriptionCardProj: '#666',
        bgProjectCard: '#fff',
        h4TitleCard: '#42446e',
        link: '#000',

        iconProjColor: 'black',

        message: '#42446e',

        buttonImg: MoonForLight,
    },
};

type ThemeContextType = {
    theme: DefaultTheme;
    toggleTheme: () => void;
}

// Создаем контекст
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Провайдер темы
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

    // Функция смены темы
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

// Хук для использования темы
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};