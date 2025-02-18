import {keyframes} from "styled-components";

export const opacity = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`

export const waveAnimation = keyframes`
    0% {
        filter: hue-rotate(0deg);
        
    }
    50% {
        filter: hue-rotate(100deg);
        opacity: 0.6;
    }
    100% {
        filter: hue-rotate(0deg);
    }
`

export const FadeForText = keyframes` 
    0% {
        transform: scale(0.8);
        opacity: 0.4;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`

export const HelloAnimation = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(20deg); }
  100% { transform: rotate(0deg); }
`