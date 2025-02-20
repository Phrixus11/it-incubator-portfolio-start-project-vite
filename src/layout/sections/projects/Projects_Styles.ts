import styled from "styled-components";
import {globalTheme} from "../../../styles/GlobalTheme.tsx";

const Projects = styled.section`
    min-height: 100%;
    position: relative;
    overflow-x: clip;
    padding-top: 200px;
`

const Project = styled.div`
    max-width: 375px;
    width: 330px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: ${({theme}) => theme.colors.bgProjectCard};
    border-radius: 20px;
    transition: ${globalTheme.transition};
    flex-grow: 1;

    &:hover {
        transform: scale(1.05);

        & > img {
            filter: grayscale(0);
        }

        @media ${globalTheme.media.tablet} {
            transform: none;
        }
    }
`

const Img = styled.img`
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 260px;
    filter: grayscale(0.5);
    transition: ${globalTheme.transition};

    @media ${globalTheme.media.tablet} {
        filter: grayscale(0);
    }

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
    color: ${({theme}) => theme.colors.titleCard};
    margin-bottom: 17px;
`

const TitleStack = styled.h4`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    color: ${({theme}) => theme.colors.h4TitleCard};
    margin-bottom: 20px;
`

const TextContent = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 1.44444;
    color: ${({theme}) => theme.colors.descriptionCardProj};
    margin-bottom: 12px;
`

const TextStack = styled.span`
    line-height: 1.625;
    color: ${({theme}) => theme.colors.h4TitleCard};
    font-weight: 300;
    font-size: 14px;
`


export const S = {
    Projects,
    Project,
    Img,
    DescriptionWrapper,
    Title,
    TitleStack,
    TextContent,
    TextStack,
}