import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.ts";
import {MobileMenu} from "./MobileMenu/MobileMenu.tsx";
import * as React from "react";
import {S} from "./Header_Styles.ts";
import {DesktopMenu} from "./DesktopMenu/DesktopMenu.tsx";
import ThemeSwitcher from "../../components/ThemeSwitcer.tsx";


export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1050;

    React.useEffect(() => {
        const handleWindowResize = () => window.innerWidth > 1050 ? setWidth(1060) : setWidth(1040)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <Logo/>
                {width > breakpoint ? <DesktopMenu key="desktop"/> : <MobileMenu key="mobile"/>}
                <ThemeSwitcher/>
            </Container>
        </S.Header>
    );
};