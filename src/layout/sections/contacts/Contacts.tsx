import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {TextTitle} from "../../../components/TextTitle.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Contacts_Styles.ts";
import * as React from "react";
import {Fade} from "react-awesome-reveal";


export const Contacts: React.FC = () => {
    return (
        <S.Contacts id="contact">
            <Container>
                <Fade damping={0.2} cascade={true}>
                    <SectionTitle>Contact</SectionTitle>
                    <TextTitle>For any questions please mail me:</TextTitle>
                    <S.Form>
                        <S.Field placeholder={'Name'}/>
                        <S.Field placeholder={'Subject'}/>
                        <S.Field placeholder={'Message'} as={'textarea'}/>
                        <Button type={"submit"}>Send Message</Button>
                    </S.Form>
                </Fade>
            </Container>
        </S.Contacts>
    );
};