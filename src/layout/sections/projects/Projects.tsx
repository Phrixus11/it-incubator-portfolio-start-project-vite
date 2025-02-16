import {SectionTitle} from "../../../components/SectionTitle.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Project} from "./project/Project.tsx";
import {globalTheme} from "../../../styles/GlobalTheme.tsx";
import {TextTitle} from "../../../components/TextTitle.ts";
import {Container} from "../../../components/Container.ts";
import { S } from "./Projects_Styles.ts";
import * as React from "react";

export const Projects: React.FC = () => {
    return (
        <S.Projects id={'projects'}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TextTitle>Things I’ve built so far</TextTitle>
                <FlexWrapper justifyContent={'center'} wrap={'wrap'} gap={'35px'}>
                    {globalTheme.projectItems.map((item) => (
                        <Project src={item.src} title={item.title} textStack={item.textStack} textContent={item.textContent}/>
                    ))}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};