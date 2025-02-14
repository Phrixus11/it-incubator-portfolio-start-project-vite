import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import {globalTheme} from "../../../styles/GlobalTheme.tsx";
import {TextTitle} from "../../../components/TextTitle.tsx";

export const Projects = () => {
    return (
        <StyledProjects id={'projects'}>
            <SectionTitle>Projects</SectionTitle>
            <TextTitle>Things I’ve built so far</TextTitle>
            <FlexWrapper justifyContent={'space-around'} wrap={'wrap'} gap={'50px'}>
                {globalTheme.projectItems.map((item) => (
                    <Project src={item.src} title={item.title} textStack={item.textStack} textContent={item.textContent}/>
                ))}
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100%;
    padding-top: 70px;
    scroll-margin-top: 160px;
`