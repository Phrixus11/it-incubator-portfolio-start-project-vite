import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";

type SkillsPropsType = {
    iconId: string,
    textTitle: string,
}

export const Skill = (props: SkillsPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.textTitle}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SkillTitle = styled.h3`

`