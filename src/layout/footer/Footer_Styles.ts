import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Container} from "../../components/Container.ts";
import {globalTheme} from "../../styles/GlobalTheme.tsx";

const Footer = styled.footer`
    padding: 60px 0;

    & p {
        z-index: 0;
    }

    ${Container} ${FlexWrapper}:first-child {
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

        @media ${globalTheme.media.tablet} {
            flex-direction: column;
            gap: 20px;
            justify-content: center;

            ${FlexWrapper} {
                justify-content: center;
            }
        }
    }

    ul {
        flex-wrap: nowrap;
    }

    @media (max-width: 1090px) {
        nav {
            display: none;
        }

        ${Container} ${FlexWrapper}:nth-of-type(2) {
            justify-content: center;
        }
    }
`

const TextContact = styled.a`
    display: inline-block;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: #a7a7a7;
    white-space: nowrap;

    &:hover {

        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transform: scale(1.07) translateY(-2px);
    }

    @media ${globalTheme.media.tablet} {
        &:hover {
            transform: none;
            background: transparent;
            background-clip: unset;
            -webkit-background-clip: unset;
            -webkit-text-fill-color: unset;
        }
`


const TextInfo = styled.span`
    display: inline-block;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: #a7a7a7;
    white-space: nowrap;

    & span:nth-child(1) {
        background: linear-gradient(90deg, #13b0f5 -44.4%, #e70faa 113%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & span:nth-child(2) {
        background: linear-gradient(90deg, #13b0f5 -133%, #e70faa 113%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & span:nth-child(3) {
        background: linear-gradient(90deg, #13b0f5 -150%, #e70faa 113%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    @media ${globalTheme.media.tablet} {
        letter-spacing: -0.5px;
    }
`

export const S = {
    Footer,
    TextContact,
    TextInfo,
}