import styled from "styled-components";
import iconLink from "../../../../assets/img/icon_link-chain.svg"
import iconGitHub from "../../../../assets/img/icon_github-fill.svg"


export const BlockLink = () => {
    return (
        <StyledBlockLink>
            <Link href={'#'}>Live Preview</Link>
            <Link href={'#'}>View Code</Link>
        </StyledBlockLink>
    );
};

const StyledBlockLink = styled.div`
    position: relative;
    display: flex;
    gap: 60px;
    

    :first-child::before {
        content: "";
        display: inline-block;

        background-color: ${({theme}) => theme.colors.link};
        mask-image: url("${iconLink}");
        -webkit-mask-image: url("${iconLink}");
        
        position: relative;
        width: 20px;
        height: 20px;
        left: -10px;
        bottom: -4px;
    }

    :last-child::before {
        content: "";
        display: inline-block;

        background-color: ${({theme}) => theme.colors.link};
        mask-image: url("${iconGitHub}");
        -webkit-mask-image: url("${iconGitHub}");
    
        
        position: relative;
        width: 20px;
        height: 20px;
        left: -10px;
        bottom: -4px;
    }

`

const Link = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${({theme}) => theme.colors.link};
    white-space: nowrap;
`