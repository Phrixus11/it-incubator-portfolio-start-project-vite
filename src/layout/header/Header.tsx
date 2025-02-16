import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.ts";
import {MobileMenu} from "./MobileMenu/MobileMenu.tsx";
import * as React from "react";
import {S} from "./Header_Styles.ts";
import {DesktopMenu} from "./DesktopMenu/DesktopMenu.tsx";


export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1050;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <Logo/>
                {width > breakpoint ? <DesktopMenu/> : <MobileMenu/>}
            </Container>
        </S.Header>
    );
};