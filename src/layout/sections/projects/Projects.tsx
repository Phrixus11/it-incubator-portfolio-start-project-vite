import {SectionTitle} from "../../../components/SectionTitle.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Project} from "./project/Project.tsx";
import {globalTheme} from "../../../styles/GlobalTheme.tsx";
import {TextTitle} from "../../../components/TextTitle.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Projects_Styles.ts";
import * as React from "react";
import {Fade} from "react-awesome-reveal";

export const Projects: React.FC = () => {
    return (
        <S.Projects id={'projects'}>
            <Container>
                <Fade damping={0.5} direction={"down"} >
                    <SectionTitle>Projects</SectionTitle>
                    <TextTitle>Things I’ve built so far</TextTitle>
                </Fade>
                <FlexWrapper justifyContent={'center'} wrap={'wrap'} gap={'35px'}>
                    <Fade damping={0.2} direction={"down"}>
                        {globalTheme.projectItems.map((item) => (
                            <Project src={item.src} title={item.title} textStack={item.textStack}
                                     textContent={item.textContent}/>
                        ))}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};