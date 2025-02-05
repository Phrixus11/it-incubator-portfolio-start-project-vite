import styled from "styled-components";


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
            <Title>{props.title}</Title>
            <TextContent>{props.textContent}</TextContent>
            <TitleStack>Tech stack : <TextStack>{props.textStack}</TextStack></TitleStack>

            <Link href={'#'}></Link>
            <Link href={'#'}></Link>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    max-width: 375px;
`

const Img = styled.img`
    width: 100%;
    max-height: 260px;
    object-fit: cover;
`

const Title = styled.h3`

`

const TitleStack = styled.h4`
    
`

const TextContent = styled.p`

`

const TextStack = styled.span`
    font-weight: 300;
    font-size: 14px;
`

const Link = styled.a`

`