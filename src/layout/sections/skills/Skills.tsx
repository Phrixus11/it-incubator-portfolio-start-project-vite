import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./Skill.tsx";
import {TextTitle} from "../../../components/TextTitle.tsx";
import {globalTheme} from "../../../styles/GlobalTheme.tsx";

export const Skills = () => {
    return (
        <StyledSkills id={'stack'}>
            <SectionTitle>My Tech Stack</SectionTitle>
            <TextTitle>Technologies I’ve been working with recently</TextTitle>
            <FlexWrapper gap="100px" wrap={'wrap'} justifyContent={'space-between'}>

                {globalTheme.skills.map((item) => {
                    return (
                        <Skill iconId={item.iconId} textTitle={item.iconName} width={item.width} height={item.height} viewBox={item.viewBox}/>
                    )
                })}
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
    scroll-margin-top: 100px;
`
