import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./Skill.tsx";
import {TextTitle} from "../../../components/TextTitle.ts";
import {globalTheme} from "../../../styles/GlobalTheme.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from "./Skills_Styles.ts";
import * as React from "react";

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'stack'}>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <TextTitle>Technologies I’ve been working with recently</TextTitle>
                <S.GridWrapper>
                    {globalTheme.skills.map((item) => {
                        return <Skill key={new Date().getTime()}
                                      iconId={item.iconId}
                                      textTitle={item.iconName}
                                      width={item.width}
                                      height={item.height}
                                      viewBox={item.viewBox}/>
                    })}
                </S.GridWrapper>
            </Container>
        </S.Skills>
    );
};