import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {ExperienceCard} from "./ExperienceCard.tsx";
import {Container} from "../../../components/Container.ts";
import {Fade} from "react-awesome-reveal";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import { S } from "./About_Styles.ts";
import * as React from "react";


export const About:React.FC = () => {
    return (
        <S.About id="about">
            <Container>
                <Fade damping={0.2} direction={"right"}>
                    <FlexWrapper direction={'column'} gap={'37px'} alignItems={'flex-start'}>
                        <SectionTitle>About Me</SectionTitle>
                        <S.Description>The Generator App is an online tool that helps you to export ready-made templates
                            ready
                            to
                            work as your future website. It helps you to combine slides, panels and other components and
                            export
                            it as a set of static files: HTML/CSS/JS.</S.Description>
                        <S.AboutMeTitle>Work Experience</S.AboutMeTitle>
                        <ExperienceCard title={'Junior Web Developer'} nameApp={'Dr. Rajkumar’s Learning App'}
                                        location={'Bengaluru'} date={'Sep 2021 - Dec 2021'} involvement={'Full Time'}/>
                        <ExperienceCard title={'Web Development Intern'} nameApp={'IonPixelz Web Solutions'}
                                        location={'Bengaluru'} date={'Sep 2021 - Dec 2021'} involvement={'Internship'}/>
                        <ExperienceCard title={'SEO / SEM Specialist'} nameApp={'HAAPS'} location={'Bengaluru'}
                                        date={'Sep 2021 - Dec 2021'} involvement={'Full Time'}/>
                        <S.AboutMeTitle>Education</S.AboutMeTitle>
                        <ExperienceCard title={'Bachelor in Electronics & Communication'}
                                        nameApp={'Bangalore Instutute of Technology'} date={'Aug 2015 - Dec 2020'}
                                        involvement={'Full Time'}/>

                    </FlexWrapper>
                </Fade>
            </Container>
        </S.About>
    );
};

