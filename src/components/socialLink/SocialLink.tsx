import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import * as React from "react";
import svgSprite from "../../assets/img/svgSprite.svg";
import {globalTheme} from "../../styles/GlobalTheme.tsx";
import { useTheme } from "../../styles/ThemeContext.tsx"

export const SocialLink: React.FC = () => {
    const { theme } = useTheme();

    return (
        <SocialLinkStyled>
            <a href="#">
                <Icon width={'32'} height={'32'} viewBox={'0 0 32 32'} iconId={"iconGitHub"} fill={theme.colors.menuItem}/>
            </a>

            <a href="#">
                <Icon width={'32'} height={'32'} viewBox={'0 0 32 32'}  iconId={"iconTwitter"} fill={theme.colors.menuItem}/>
            </a>

            <a href="#">
                <Icon width={'32'} height={'32'} viewBox={'0 0 32 32'}  iconId={"iconLinkedid"} fill={theme.colors.menuItem}/>
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
        transition: ${globalTheme.transition};
        
        &:hover {
            transform: scale(1.1) translateY(-2px);

            svg {
                fill: url(${svgSprite}#grad1);
            }
        }
    }
`

