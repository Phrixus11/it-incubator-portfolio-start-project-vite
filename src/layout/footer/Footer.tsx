import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {SocialLink} from "../../components/socialLink/SocialLink.tsx";

const menuItems = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justifyContent={'space-between'}>
                <Logo/>
                <FlexWrapper justifyContent={'space-between'} alignItems={'center'} gap={'30px'}>
                    <TextInfo>+91 12345 09876</TextInfo>
                    <TextInfo>info@example.com</TextInfo>
                    <SocialLink/>
                </FlexWrapper>
            </FlexWrapper>
            <hr/>
            <FlexWrapper justifyContent={'space-between'} alignItems={'center'}>
                <Menu menuItems={menuItems}/>
                <TextInfo>Designed and built by Pavan MG with Love & Coffee</TextInfo>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`

const TextInfo = styled.span`
    display: inline-block;
`
