import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import { S } from "./About_Styles.ts";
import * as React from "react";

type ExperienceCardPropsType = {
    title: string,
    nameApp: string,
    location?: string,
    date: string,
    involvement: string,
}

export const ExperienceCard:React.FC<ExperienceCardPropsType> = (props: ExperienceCardPropsType) => {
    return (
        <S.ExperienceCard>
            <FlexWrapper justifyContent={'space-between'}>
                <S.TitleExperienceCard>{props.title}</S.TitleExperienceCard>
                <S.Involvement className={'inv'}>{props.involvement}</S.Involvement>
            </FlexWrapper>
            <FlexWrapper justifyContent={'space-between'} wrap={'wrap'} >
                <FlexWrapper className={'spanWrapper'} justifyContent={'space-between'} wrap={'wrap'}>
                    <S.NameApp>{props.nameApp}</S.NameApp>
                    <S.LocationName location={props.location}>{props.location}</S.LocationName>
                </FlexWrapper>

                <S.Date>{props.date}</S.Date>
            </FlexWrapper>
        </S.ExperienceCard>
    );
};


