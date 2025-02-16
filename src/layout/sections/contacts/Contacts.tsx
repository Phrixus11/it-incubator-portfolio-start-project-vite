import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {TextTitle} from "../../../components/TextTitle.ts";
import {Container} from "../../../components/Container.ts";
import { S } from "./Contacts_Styles.ts";
import * as React from "react";


export const Contacts: React.FC = () => {
    return (
        <S.Contacts id="contact">
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <TextTitle>For any questions please mail me:</TextTitle>
                <S.Form>
                    <S.Field placeholder={'Name'}/>
                    <S.Field placeholder={'Subject'}/>
                    <S.Field placeholder={'Message'} as={'textarea'}/>
                    <Button type={"submit"}>Send Message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};