import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {TextTitle} from "../../../components/TextTitle.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Contacts_Styles.ts";
import * as React from "react";
import {Fade} from "react-awesome-reveal";
import {Field} from "./Field.tsx";


export const Contacts: React.FC = () => {
    const SendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const MSG: Element | null = document.querySelector(".sendMSG")
        if (MSG) {
            MSG.classList.add("visible")
            setTimeout(() => MSG.classList.remove("visible"), 1500)
        }
        const form = event.target as HTMLFormElement;
        form.reset();
    }

    return (
        <S.Contacts id="contact">
            <Container>
                <Fade damping={0.5} direction={"down"}>
                    <SectionTitle>Contact</SectionTitle>
                    <TextTitle>For any questions please mail me:</TextTitle>
                </Fade>
                <Fade damping={0.2} cascade={true}>
                    <S.Form onSubmit={SendEmail}>
                        <Field id={"Name"} title={"Name"}/>
                        <Field id={"Subject"} title={"Subject"}/>
                        <Field as={'textarea'} id={"Message"} title={"Message"}/>
                        <Button type={"submit"}>Send Message</Button>
                    </S.Form>
                </Fade>
                <S.Message className={"sendMSG"}><span>Message sent successfully!</span></S.Message>
            </Container>
        </S.Contacts>
    );
};

