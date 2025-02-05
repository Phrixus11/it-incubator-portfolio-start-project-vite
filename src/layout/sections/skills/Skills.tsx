import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <FlexWrapper gap="110px">
                <Skill iconId={'logoHtml'} textTitle="HTML5" />
                <Skill iconId={'logoSass'} textTitle="SASS" />
                <Skill iconId={'logoReact'} textTitle="React" />
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`
