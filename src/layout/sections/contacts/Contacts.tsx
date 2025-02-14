import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import {Button} from "../../../components/Button.tsx";
import {TextTitle} from "../../../components/TextTitle.tsx";


export const Contacts = () => {
    return (
        <StyledContacts id="contact">
            <SectionTitle>Contact</SectionTitle>
            <TextTitle>For any questions please mail me:</TextTitle>
            <StyledForm>
                <Field placeholder={'Name'}/>
                <Field placeholder={'Subject'}/>
                <Field placeholder={'Message'} as={'textarea'}/>
                <Button type={"submit"}>Send Message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 100%;
    scroll-margin-top: 200px;
`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0 auto 200px;
    
    textarea {
        resize: none;
        height: 155px;
    }
`
const Field = styled.input`
    width: 100%;
    border: 1px solid #a7a7a7;
    border-radius: 4px; 
    background-color: transparent;
    padding: 7px 15px;

    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.44444;
    color: #ccc;

    &:focus-visible {
        outline: none;
    }
`
