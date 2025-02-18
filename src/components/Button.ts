import styled from "styled-components";
import {globalTheme} from "../styles/GlobalTheme.tsx";

export const Button = styled.button`
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    line-height: 1.44444;
    color: #ccc;
    border: 1px solid #a7a7a7;
    border-radius: 4px;
    min-width: 50%;
    min-height: 42px;
    cursor: pointer;
    transition: ${globalTheme.transition};

    &:hover {
        transform: scale(1.05);
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        border-image-source: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        border-image-slice: 1;
    }

    @media ${globalTheme.media.tablet} {
        &:hover {
            transform: none;
            background: transparent;
            background-clip: unset;
            -webkit-background-clip: unset;
            -webkit-text-fill-color: unset;
            border-image-source: unset;
        }
`