import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {SocialLink} from "../../components/socialLink/SocialLink.tsx";

const menuItems = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={menuItems}/>


            <SocialLink/>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    //background-color: #191919;
    display: flex;
    justify-content: space-around;
`