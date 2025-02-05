import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import imgProject1 from '../../../assets/img/proj-1.webp'

const projectItems = [
    {
        src: imgProject1,
        title: 'Project Tile goes here',
        textContent: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        textStack: 'HTML, JavaScript, SASS, React',
    },
    {
        src: imgProject1,
        title: 'Project Tile goes here',
        textContent: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        textStack: 'HTML, JavaScript, SASS, React',
    },
]

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper justifyContent={'space-around'}>
                {projectItems.map((item) => (
                    <Project src={item.src} title={item.title} textStack={item.textStack} textContent={item.textContent}/>
                ))}
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: aqua;
`