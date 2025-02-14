import styled from "styled-components";

import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./Skill.tsx";
import {TextTitle} from "../../../components/TextTitle.tsx";
import {globalTheme} from "../../../styles/GlobalTheme.tsx";

export const Skills = () => {
    return (
        <StyledSkills id={'stack'}>
            <SectionTitle>My Tech Stack</SectionTitle>
            <TextTitle>Technologies I’ve been working with recently</TextTitle>
            <GridWrapper>

                {globalTheme.skills.map((item) => {
                    return (
                        <Skill iconId={item.iconId} textTitle={item.iconName} width={item.width} height={item.height} viewBox={item.viewBox}/>
                    )
                })}
            </GridWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
    padding-top: 95px;
    
    ${TextTitle} {
        @media ${globalTheme.media.tablet} {
            margin-bottom: 80px;
        }
    }
`

const GridWrapper = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(6, 120px);
    align-items: baseline;
    justify-content: space-around;
    
    @media ${globalTheme.media.tablet} {
        grid-template-columns: repeat(4, 120px);
    }    
    
    @media screen and (max-width: 650px) {
        grid-template-columns: repeat(2, 120px);
    }
`
