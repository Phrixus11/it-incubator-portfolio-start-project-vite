import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {font} from "../../../styles/Commons.ts";
import {waveAnimation} from "../../../styles/animations/Animations.tsx";
import {globalTheme} from "../../../styles/GlobalTheme.tsx";
import abstract2 from "../../../assets/img/drawing.svg";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import iconBuild from '../../../assets/img/svgIcon/VectorBuild.svg';
import iconDate from '../../../assets/img/svgIcon/vector_date.svg';
import iconLocation from '../../../assets/img/svgIcon/vector_location.svg';

const About = styled.section`
    max-width: 100%;
    position: relative;
    overflow-x: clip;

    & ${SectionTitle} {
        ${font({weight: 700, Fmax: 42, Fmin: 32})}
        margin-top: 0;
        
    }
    
    &::after {
        content: "";
        display: inline-block;
        width: 921px;
        height: 906px;
        position: absolute;
        right: -317px;
        bottom: 55px;
        animation: ${waveAnimation} ${globalTheme.animationWave};
        background: linear-gradient(to right, #13b0f5, #e70faa);
        -webkit-mask-image: url("${abstract2}");
        mask-image: url("${abstract2}");
        mask-repeat: no-repeat;
        mask-size: cover;
        z-index: -1;


        @media ${globalTheme.media.tablet} {
            display: none;
        }
    }

    & > ${Container} ${FlexWrapper} {
        max-width: 710px;
    }
}`

const AboutMeTitle = styled.h3`
    ${font({weight: 700, Fmax: 42, Fmin: 32})}
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.title};
`

const Description = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: ${({ theme }) => theme.colors.titleDescription};
`

const ExperienceCard = styled.div`
    width: 100%;
    position: relative;

    ${FlexWrapper}.spanWrapper {
        
        width: 48%;
        @media (max-width: 760px) {
            flex-direction: column;
        }
    }

    span {
        font-weight: 500;
        font-size: 12px;
        line-height: 2.33333;
        letter-spacing: 0.08em;
        color: #a7a7a7;
        padding-left: 20px;
        white-space: normal;
    }
    
    &::after {
        content: '';
        display: inline-block;
        background-color: #ebeaed;
        height: 2px;
        width: 100%;

        position: relative;
        bottom: -10px;
    }
`

const TitleExperienceCard = styled.h4`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.menuItem};
`

const Involvement = styled.span`
    && {
        font-weight: 600;
        font-size: 9px;
        line-height: 2.88889;
        color: #018c0f;
        width: 84px;
        height: 24px;
        border-radius: 100px;
        background-color: #d7ffe0;
        padding-left: 0;
        text-align: center;
    }
`

const NameApp = styled.span`
    display: inline-block;
    position: relative;
    white-space: nowrap;

    &::before {
        content: "";
        width: 12px;
        height: 12px;
        background-image: url("${iconBuild}");
        display: inline-block;

        position: absolute;
        left: 0;
        top: 9px;
    }
`

type LocationNamePropsType = { location?: string }

const LocationName = styled.span<LocationNamePropsType>`
    display: inline-block;
    position: relative;

    &::before {
        content: "";
        width: 12px;
        height: 12px;
        background-image: ${(props) => (props.location ? `url("${iconLocation}")` : "none")};
        display: inline-block;

        position: absolute;
        left: 0;
        bottom: 9px;
    }
`

const Date = styled.span`
    display: inline-block;
    position: relative;
    padding-left: 20px;

    &::before {
        content: "";
        width: 16px;
        height: 12px;
        background-image: url("${iconDate}");
        display: inline-block;
        position: absolute;
        left: 0;
        top: 9px;
    }
`

export const S = {
    About,
    AboutMeTitle,
    Description,
    ExperienceCard,
    TitleExperienceCard,
    Involvement,
    NameApp,
    LocationName,
    Date,
}