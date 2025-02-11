import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {SocialLink} from "../../components/socialLink/SocialLink.tsx";
import { FlexWrapper } from "../../components/FlexWrapper.tsx";
import {globalTheme} from "../../styles/GlobalTheme.tsx";
import {Container} from "../../components/Container.tsx";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo/>
                <FlexWrapper gap={'50px'} alignItems={'center'} justifyContent={'flex-end'}>
                    <Menu/>
                    <SocialLink/>
                </FlexWrapper>
            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${globalTheme.colors.primaryBg};
    z-index: 999;
    
    & > ${Container} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 0;
    }

    
`