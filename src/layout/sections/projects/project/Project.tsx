import {S} from "../Projects_Styles.ts";
import {BlockLink} from "./BlockLink.tsx";
import * as React from "react";


type ProjectPropsType = {
    src: string,
    title: string,
    textContent: string,
    textStack: string,
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.Img src={props.src} alt={props.title}/>
            <S.DescriptionWrapper>
                <S.Title>{props.title}</S.Title>
                <S.TextContent>{props.textContent}</S.TextContent>
                <S.TitleStack>Tech stack : <S.TextStack>{props.textStack}</S.TextStack></S.TitleStack>
                <BlockLink/>
            </S.DescriptionWrapper>
        </S.Project>
    );
};