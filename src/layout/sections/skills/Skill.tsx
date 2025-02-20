import {Icon} from "../../../components/icon/Icon.tsx";
import { S } from "./Skills_Styles.ts";
import * as React from "react";
import {useTheme} from "../../../styles/ThemeContext.tsx";

type SkillsPropsType = {
    iconId: string,
    textTitle: string,
    width: string,
    height: string,
    viewBox: string,
    fill?: string,
}

export const Skill: React.FC<SkillsPropsType> = (props: SkillsPropsType) => {
    const { theme } = useTheme();

    return (
        <S.Skill>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} fill={theme.colors.menuItem} />
            <S.SkillTitle>{props.textTitle}</S.SkillTitle>
        </S.Skill>
    );
};