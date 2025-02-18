import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import photo from "../../../assets/img/photo.webp";
import {Container} from "../../../components/Container.ts";
import { S } from "./Main_Styles.ts";
import Typewriter from 'typewriter-effect';

export const Main = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper alignItems={"center"} justifyContent={"space-between"} wrap={'wrap-reverse'}>
                    <S.MainTextWrapper>
                        <S.MainText>Hi <span>👋</span>,</S.MainText>
                        <S.MainText>My name is</S.MainText>
                        <S.Name>Pavan MG</S.Name>
                        <S.MainTitle>
                            <p>I build things for web</p>
                            <Typewriter
                                options={{
                                    strings: ['I build things for web',],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                }}

                            />
                        </S.MainTitle>

                    </S.MainTextWrapper>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};