import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";


export const SocialLink = () => {
    return (
        <SocialLinkStyled>
            <a href="#">
                <Icon width={'32'} height={'32'} viewBox={'0 0 32 32'} iconId={"iconGitHub"}/>
            </a>

            <a href="#">
                <Icon width={'32'} height={'32'} viewBox={'0 0 32 32'}  iconId={"iconTwitter"}/>
            </a>

            <a href="#">
                <Icon width={'32'} height={'32'} viewBox={'0 0 32 32'}  iconId={"iconLinkedid"}/>
            </a>
        </SocialLinkStyled>
    );
};

const SocialLinkStyled= styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    
    a { 
        max-height: 32px;
    }
`