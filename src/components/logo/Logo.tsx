import styled from "styled-components";
import logoPavan from "../../assets/img/logoPavan.png";

export const Logo = () => {
    return (
        // <StyledLogo>&lt;BG/&gt;</StyledLogo>
        <StyledLogo>
            <img src={logoPavan} alt="logo"/>
        </StyledLogo>
    );
};

const StyledLogo = styled.p`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 35px;
    font-weight: 700;
    z-index: 9999;
`