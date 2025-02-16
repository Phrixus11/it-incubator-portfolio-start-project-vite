import {globalTheme} from "../../../styles/GlobalTheme.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {font} from "../../../styles/Commons.ts";
import abstract from "../../../assets/img/Abstract.png"

const Main = styled.section`
    min-height: 70vh;
    display: flex;
    align-items: center;
    scroll-margin-top: 200px;
    margin-top: 142px;
    overflow-x: clip;

    @media ${globalTheme.media.tablet} {
        margin: 130px 0 100px;
        ${FlexWrapper} {
            flex-direction: column-reverse;
            justify-content: center;
        }
    }
`

const MainText = styled.p`
    ${font({weight: 700, Fmax: 58, Fmin: 36, color: globalTheme.colors.mainText })}
    letter-spacing: -0.02em;
`

const Name = styled.h2`
    ${font({weight: 700, Fmax: 58, Fmin: 36 })}
    letter-spacing: -0.02em;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const MainTitle = styled.h2`
    ${font({weight: 700, Fmax: 58, Fmin: 36, color: globalTheme.colors.mainText })}
    letter-spacing: -0.02em;
`

const Photo = styled.img`
    border-radius: 230px;
    width: 349px;
    height: 349px;
    display: flex;
    object-fit: cover;

    @media ${globalTheme.media.tablet} {
        width: 300px;
        height: 300px;
    }
`

const PhotoWrapper = styled.div`
    padding: 10px;
    margin-right: 50px;
    background: linear-gradient(0deg, #13b0f5 0%, #e70faa 100%);
    border-radius: 230px;
    position: relative;

    &::after {
        content: '';
        display: inline-block;
        position: absolute;
        width: 630px;
        height: 630px;
        background-image: url(${abstract});
        bottom: -130px;
        right: -150px;
    }
    @media ${globalTheme.media.tablet} {
        margin: 0 0 60px
    }
`

const MainTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media ${globalTheme.media.tablet} {
        align-self: flex-end;
        margin-top: 45px;
    }`

export const S = {
    Main,
    MainText,
    Name,
    MainTitle,
    Photo,
    PhotoWrapper,
    MainTextWrapper,
}