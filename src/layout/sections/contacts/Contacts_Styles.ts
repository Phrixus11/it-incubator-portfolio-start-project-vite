import styled from "styled-components";

const Contacts = styled.section`
    min-height: 100%;
`

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0 auto 80px;
    
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

export const S = {
    Contacts,
    Form,
    Field,
}