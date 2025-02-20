import styled from "styled-components";

const Contacts = styled.section`
    min-height: 100%;
    padding-top: 200px;
    position: relative;
`

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 0 auto 80px;
    
    textarea {
        resize: none;
        height: 155px;
    }
    
`

const FieldWrapper = styled.div`
    width: 100%;
    position: relative;
`

const Field = styled.input`
    width: 100%;
    border: 1px solid #a7a7a7;
    border-radius: 4px;
    background-color: transparent;
    padding: 10px 15px;

    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.44444;
    color: ${({theme}) => theme.colors.titleCard};

    position: relative;

    &:focus-visible {
        outline: none;
    }

    &::placeholder {
        color: transparent;
    }

    & + label {
        display: inline-block;
        font-weight: 300;
        font-size: 18px;
        line-height: 1.44444;
        color: ${({theme}) => theme.colors.title};
        position: absolute;
        background-color: ${({theme}) => theme.colors.themeColor};
        border-radius: 15px;
        left: 16px;
        top: 11px;
        padding: 0 5px;
        transition: 0.3s all ease;
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
        transform: translateY(-25px) scale(0.85);
    }

    &:-webkit-autofill {
        box-shadow: ${({theme}) => theme.colors.themeColor} 0 0 0 1000px inset;
        -webkit-text-fill-color: ${({theme}) => theme.colors.title};
    }

`

const Message = styled("div")`
    position: absolute;
    left: calc(50% - 142px);
    bottom: 200px;
    background-color: ${({theme}) => theme.colors.message};
    border-radius: 50px;
    box-shadow: 0 0 5px 2px;

    transform: scale(0);
    transition: 0.3s all ease-in-out;

    &.visible {
        transform: scale(1);
    }

    & span {
        display: block;
        padding: 25px;


        font-weight: 300;
        font-size: 18px;
        line-height: 1.44444;
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }
`

export const S = {
    Contacts,
    Form,
    FieldWrapper,
    Field,
    Message,
}