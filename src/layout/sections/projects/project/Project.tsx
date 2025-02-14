import styled from "styled-components";
import {globalTheme} from "../../../../styles/GlobalTheme.tsx";
import {BlockLink} from "./BlockLink.tsx";


type ProjectPropsType = {
    src: string,
    title: string,
    textContent: string,
    textStack: string,
}

export const Project = (props: ProjectPropsType ) => {
    return (
        <StyledProject>
            <Img src={props.src} alt={props.title} />
            <DescriptionWrapper>
                <Title>{props.title}</Title>
                <TextContent>{props.textContent}</TextContent>
                <TitleStack>Tech stack : <TextStack>{props.textStack}</TextStack></TitleStack>
                <BlockLink/>
            </DescriptionWrapper>


        </StyledProject>
    );
};

const StyledProject = styled.div`
    max-width: 375px;
    //width: 355px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: ${globalTheme.colors.bgProjectCard};
    border-radius: 20px;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
        & > img {
            filter: grayscale(0);
        }
    }
`

const Img = styled.img`
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 260px;
    filter: grayscale(0.5);
    transition: 0.3s;
    
    &:hover {
        cursor: pointer;
        
    }
`

const DescriptionWrapper = styled.div`
    padding: 27px 30px 25px 30px;
`

const Title = styled.h3`
    font-weight: 500;
    font-size: 28px;
    line-height: 1.2;
    color: ${globalTheme.colors.title};
    margin-bottom: 17px;
`

const TitleStack = styled.h4`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    color: ${globalTheme.colors.title};
    margin-bottom: 20px;
`

const TextContent = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 1.44444;
    color: ${globalTheme.colors.title};
    margin-bottom: 12px;
`

const TextStack = styled.span`
    line-height: 1.625;
    color: ${globalTheme.colors.title};
    font-weight: 300;
    font-size: 14px;
`
