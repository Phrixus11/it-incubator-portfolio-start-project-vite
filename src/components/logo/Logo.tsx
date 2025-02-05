import styled from "styled-components";


export const Logo = () => {
    return (
        <StyledLogo>&lt;JR/&gt;</StyledLogo>
    );
};

const StyledLogo = styled.p`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`