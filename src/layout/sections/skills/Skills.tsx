import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./Skill.tsx";
import {TextTitle} from "../../../components/TextTitle.ts";
import {globalTheme} from "../../../styles/GlobalTheme.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from "./Skills_Styles.ts";
import * as React from "react";
import {Fade} from "react-awesome-reveal";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";


export const Skills: React.FC = () => {
    return (
        <S.Skills id={'stack'}>
            <Container>
                <Fade>
                    <SectionTitle>My Tech Stack</SectionTitle>
                    <TextTitle>Technologies I’ve been working with recently</TextTitle>
                </Fade>
                <FlexWrapper>
                    <S.GridWrapper>

                        <Fade cascade={true} damping={0.2} direction={"left"}>
                            {globalTheme.skills.slice(0, globalTheme.skills.length / 2).map((item) => {
                                return (
                                    <Skill key={new Date().getTime()}
                                           iconId={item.iconId}
                                           textTitle={item.iconName}
                                           width={item.width}
                                           height={item.height}
                                           viewBox={item.viewBox}/>
                                )
                            })}
                        </Fade>
                    </S.GridWrapper>
                    <S.GridWrapper>
                        <Fade cascade={true} damping={0.2} direction={"right"}>
                            {globalTheme.skills.slice(globalTheme.skills.length / 2).map((item) => {
                                return (
                                    <Skill key={new Date().getTime()}
                                           iconId={item.iconId}
                                           textTitle={item.iconName}
                                           width={item.width}
                                           height={item.height}
                                           viewBox={item.viewBox}/>
                                )
                            })}
                        </Fade>
                    </S.GridWrapper>
                </FlexWrapper>


            </Container>
        </S.Skills>
    );
};