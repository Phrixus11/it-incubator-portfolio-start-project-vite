import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import photo from "../../../assets/img/photo.webp";
import {Container} from "../../../components/Container.ts";
import { S } from "./Main_Styles.ts";

export const Main = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper alignItems={"center"} justifyContent={"space-between"} wrap={'wrap-reverse'}>
                    <S.MainTextWrapper>
                        <S.MainText>Hi 👋,</S.MainText>
                        <S.MainText>My name is</S.MainText>
                        <S.Name>Pavan MG</S.Name>
                        <S.MainTitle>I build things for web</S.MainTitle>
                    </S.MainTextWrapper>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};