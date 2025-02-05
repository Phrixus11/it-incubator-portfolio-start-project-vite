import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";


export const SocialLink = () => {
    return (
        <SocialLinkStyled>
            <a href="">
                <Icon width={'30'} height={'30'} viewBox={'0 0 30 30'} iconId={"iconGitHub"}/>
            </a>

            <a href="">
                <Icon width={'31'} height={'31'} viewBox={'0 0 31 31'}  iconId={"iconTwitter"}/>
            </a>

            <a href="">
                <Icon width={'30'} height={'30'} viewBox={'0 0 30 30'}  iconId={"iconLinkedid"}/>
            </a>
        </SocialLinkStyled>
    );
};

const SocialLinkStyled= styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`