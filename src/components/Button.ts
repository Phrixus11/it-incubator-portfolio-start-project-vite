import styled from "styled-components";

export const Button = styled.button`
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    line-height: 1.44444;
    color: #ccc;
    border: 1px solid #a7a7a7;
    border-radius: 4px;
    min-width: 50%;
    min-height: 42px;
    cursor: pointer;
    transition: 0.3s;
    
    &:hover {
        transform: scale(1.05);
    }
`