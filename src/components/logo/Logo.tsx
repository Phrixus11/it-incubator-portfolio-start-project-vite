import styled from "styled-components";
import logoPavan from "../../assets/img/logoPavan.png";
import * as React from "react";
import {animateScroll as scroll} from "react-scroll";
import {waveAnimation} from "../../styles/animations/Animations.tsx";
import {globalTheme} from "../../styles/GlobalTheme.tsx";

export const Logo: React.FC = () => {
    return (
        // <StyledLogo>&lt;JR/&gt;</StyledLogo>
        <StyledLogo>
            <a onClick={()=>{scroll.scrollToTop()}}>
                <img src={logoPavan} alt="logo"/>
            </a>
        </StyledLogo>
    );
};

const StyledLogo = styled.p`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 35px;
    font-weight: 700;
    z-index: 9999;
    cursor: pointer;
    animation: ${waveAnimation} ${globalTheme.animationWave};
`