import styled from "styled-components";
import {globalTheme} from "../../../styles/GlobalTheme.tsx";

const Skills = styled.section`
    padding-top: 95px;
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

const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`

const SkillTitle = styled.h3`
    color: ${globalTheme.colors.title};
    font-weight: 400;
    font-size: 24px;
    line-height: 0.8125;
    text-align: center;
    margin-top: 15px;
`

export const S = {
    Skills,
    GridWrapper,
    Skill,
    SkillTitle,
}