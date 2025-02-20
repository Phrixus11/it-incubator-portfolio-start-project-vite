import {globalTheme} from "../../../styles/GlobalTheme.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {font} from "../../../styles/Commons.ts";
import abstract from "../../../assets/img/Abstract.svg"
import {HelloAnimation, waveAnimation} from "../../../styles/animations/Animations.tsx";


const Main = styled.section`
    min-height: 90vh;
    display: flex;
    align-items: center;
    overflow-x: clip;
    padding-top: 130px;
    margin-bottom: 150px;

    @media ${globalTheme.media.tablet} {
        padding-top: 130px;
        ${FlexWrapper} {
            flex-direction: column-reverse;
            justify-content: center;
        }
    }
    @media ${globalTheme.media.mobile} {
        padding-top: 130px;
        //padding-bottom: 170px;
    }
`

const MainText = styled.p`
    ${font({weight: 700, Fmax: 58, Fmin: 36, color: globalTheme.colors.mainText })}
    letter-spacing: -0.02em;
    
    span {
        display: inline-block;
        animation: ${HelloAnimation} 1s linear infinite alternate;
    }
`

const Name = styled.p`
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
    
    p {
        display: none;
    }
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
        bottom: -130px;
        right: -150px;
        animation: ${waveAnimation} ${globalTheme.animationWave} ;
        background: linear-gradient(to right, #13b0f5, #e70faa);
        -webkit-mask-image: url("${abstract}");
        mask-image: url("${abstract}");
        mask-repeat: no-repeat;
        mask-size: cover;
        opacity: 0.9;
        
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