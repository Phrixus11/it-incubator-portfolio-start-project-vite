import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {SocialLink} from "../../components/socialLink/SocialLink.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justifyContent={'space-between'} alignItems={'center'}>
                <Logo/>
                <FlexWrapper justifyContent={'flex-end'} alignItems={'center'} gap={'30px'}>
                    <TextInfo>+91 12345 09876</TextInfo>
                    <TextInfo>info@example.com</TextInfo>
                    <SocialLink/>
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper justifyContent={'space-between'} alignItems={'center'}>
                <Menu/>
                <TextInfo>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></TextInfo>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 60px 0;
    
    ${FlexWrapper}:first-child {
        margin-bottom: 100px;
        position: relative;
        &::after {
            content: '';
            display: inline-block;
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #a7a7a7;
            bottom: -50px;
        }
    }
`

const TextInfo = styled.span`
    display: inline-block;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: #a7a7a7;
    
    & span:nth-child(1) {
        background: linear-gradient(90deg, #13b0f5 -44.4%,#e70faa 113%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }    
    
    & span:nth-child(2) {
        background: linear-gradient(90deg, #13b0f5 -133%,#e70faa 113%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }    
    
    & span:nth-child(3) {
        background: linear-gradient(90deg, #13b0f5 -150%,#e70faa 113%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
