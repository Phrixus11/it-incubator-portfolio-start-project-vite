import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {globalTheme} from "../../../styles/GlobalTheme.tsx";

type SkillsPropsType = {
    iconId: string,
    textTitle: string,
    width: string,
    height: string,
    viewBox: string,
    fill?: string,
}

export const Skill = (props: SkillsPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
            <SkillTitle>{props.textTitle}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const SkillTitle = styled.h3`
    color: ${globalTheme.colors.title};
    font-weight: 400;
    font-size: 24px;
    line-height: 0.8125;
    text-align: center;
    margin-top: 15px;
`

