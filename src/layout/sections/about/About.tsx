import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {globalTheme} from "../../../styles/GlobalTheme.tsx";
import {ExperienceCard} from "./ExperienceCard.tsx";
import abstract2 from '../../../assets/img/drawing.svg'

export const About = () => {
    return (
        <StyledAbout id="about">
            <FlexWrapper direction={'column'} gap={'38px'} alignItems={'flex-start'}>
                <AboutMeTitle>About Me</AboutMeTitle>
                <Description>I am a renowned software engineer, entrepreneur, and philanthropist. He co-founded Microsoft, revolutionizing personal computing. His work laid the foundation for modern operating systems and software development.</Description>
                <AboutMeTitle>Work Experience</AboutMeTitle>
                    <ExperienceCard title={'Co-Founder & CEO'} nameApp={'Microsoft Corporation'} location={'Redmond, WA'} date={'Apr 1975 – Jan 2000'} involvement={'Full Time'} />
                    <ExperienceCard title={'Software Developer'} nameApp={'BASIC for Altair 8800'} location={'Redmond, WA'} date={'Jan 1975 – Apr 1975'} involvement={'Project-Based'} />
                    <ExperienceCard title={'Developer & System Architect'} nameApp={'MS-DOS Development'} location={'Redmond, WA'} date={'1980 – 1981'} involvement={'Full Time'} />
                <AboutMeTitle>Education</AboutMeTitle>
                    <ExperienceCard title={'Harvard University'} nameApp={'Bachelor of Arts, Computer Science'} date={'1973 – 1975'} involvement={'Full Time'} />

            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
    max-width: 710px;
    scroll-margin-top: 150px;
    position: relative;
    &::after {
        content: "";
        display: inline-block;
        width: 921px;
        height: 906px;
        background-image: url("${abstract2}");
        position: absolute;
        right: -1200px;
        bottom: 0;
        
    }
`

const AboutMeTitle = styled.h3`
    font-weight: 700;
    font-size: 42px;
    line-height: 1.2381;
    letter-spacing: -0.01em;
    color: ${globalTheme.colors.title};
`

const Description = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: ${globalTheme.colors.title};
`

