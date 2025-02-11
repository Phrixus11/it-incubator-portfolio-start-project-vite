import styled from "styled-components";
import {globalTheme} from "../../../../styles/GlobalTheme.tsx";
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

    :first-child {
        margin: 0 80px 0 30px;
    }

    :first-child::before {
        content: "";
        display: inline-block;
        background-image: url("${iconLink}");
        position: absolute;
        width: 20px;
        height: 20px;
        left: 0;
        bottom: 3px;
    }

    :last-child::before {
        content: "";
        display: inline-block;
        background-image: url("${iconGitHub}");
        position: absolute;
        width: 20px;
        height: 20px;
        left: 174px;
        bottom: 3px;
    }

`

const Link = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${globalTheme.colors.link};
`