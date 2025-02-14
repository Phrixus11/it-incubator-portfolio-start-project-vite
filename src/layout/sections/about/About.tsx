import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {globalTheme} from "../../../styles/GlobalTheme.tsx";
import {ExperienceCard} from "./ExperienceCard.tsx";
import abstract2 from '../../../assets/img/drawing.svg'
import {font} from "../../../styles/Commons.ts";




export const About = () => {
    return (
        <StyledAbout id="about">
            <FlexWrapper direction={'column'} gap={'38px'} alignItems={'flex-start'}>
                <AboutMeTitle>About Me</AboutMeTitle>
                <Description>The Generator App is an online tool that helps you to export ready-made templates ready to
                    work as your future website. It helps you to combine slides, panels and other components and export
                    it as a set of static files: HTML/CSS/JS.</Description>
                <AboutMeTitle>Work Experience</AboutMeTitle>
                <ExperienceCard title={'Junior Web Developer'} nameApp={'Dr. Rajkumar’s Learning App'}
                                location={'Bengaluru'} date={'Sep 2021 - Dec 2021'} involvement={'Full Time'}/>
                <ExperienceCard title={'Web Development Intern'} nameApp={'IonPixelz Web Solutions'}
                                location={'Bengaluru'} date={'Sep 2021 - Dec 2021'} involvement={'Internship'}/>
                <ExperienceCard title={'SEO / SEM Specialist'} nameApp={'HAAPS'} location={'Bengaluru'}
                                date={'Sep 2021 - Dec 2021'} involvement={'Full Time'}/>
                <AboutMeTitle>Education</AboutMeTitle>
                <ExperienceCard title={'Bachelor in Electronics & Communication'}
                                nameApp={'Bangalore Instutute of Technology'} date={'Aug 2015 - Dec 2020'}
                                involvement={'Full Time'}/>

            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    max-width: 100%;
    scroll-margin-top: 150px;
    position: relative;
    // &::after {
    //     content: "";
    //     display: inline-block;
    //     width: 921px;
    //     height: 906px;
        //     background-image: url("${abstract2}");
    //     position: absolute;
    //     right: -1200px;
    //     bottom: 0;

    & > ${FlexWrapper} {
        max-width: 710px;
    }

    @media ${globalTheme.media.tablet} {
        display: flex;
        justify-content: center;
    }
    
}`

const AboutMeTitle = styled.h3`
    ${font({weight: 700, Fmax: 42, Fmin: 32})}
    letter-spacing: -0.01em;
    color: ${globalTheme.colors.title};
`

const Description = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.44444;
    color: ${globalTheme.colors.title};
`

