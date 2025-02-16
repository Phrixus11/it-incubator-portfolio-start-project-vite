import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {SocialLink} from "../../components/socialLink/SocialLink.tsx";
import {Container} from "../../components/Container.ts";
import * as React from "react";
import { S } from "./Footer_Styles.ts";


export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justifyContent={'space-between'} alignItems={'center'}>
                    <Logo/>
                    <FlexWrapper justifyContent={'flex-end'} alignItems={'center'} gap={'30px'} wrap={'wrap'}>
                        <S.TextInfo>+91 12345 09876</S.TextInfo>
                        <S.TextInfo>info@example.com</S.TextInfo>
                        <SocialLink/>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper justifyContent={'space-between'} alignItems={'baseline'} wrap={'wrap'} gap={'20px'}>
                    <Menu/>
                    <S.TextInfo>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></S.TextInfo>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};