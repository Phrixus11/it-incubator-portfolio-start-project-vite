import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import photo from "../../../assets/img/706881-27.webp";
import styled from "styled-components";
import {globalTheme} from "../../../styles/GlobalTheme.tsx";
import abstract from "../../../assets/img/Abstract.png"


export const Main = () => {
    return (
        <StyledMain id={'home'}>

                <FlexWrapper alignItems={"center"} justifyContent={"space-between"}>
                    <div>
                        <MainText>Hi 👋,</MainText>
                        <MainText>My name is</MainText>
                        <Name>Bill Gates</Name>
                        <MainTitle>I am a Software Engineer</MainTitle>
                    </div>

                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>

                </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
`

const MainText = styled.p`
    font-weight: 700;
    font-size: 58px;
    letter-spacing: -0.02em;
    color: ${globalTheme.colors.mainText};
`

const Name = styled.h2`
    font-weight: 700;
    font-size: 58px;
    letter-spacing: -0.02em;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const MainTitle = styled.h2`
    font-weight: 700;
    font-size: 58px;
    letter-spacing: -0.02em;
    color: ${globalTheme.colors.mainText}; 
`

const Photo = styled.img`
    border-radius: 230px;
    width: 349px;
    height: 349px;
    display: flex;
    object-fit: cover;
`

const PhotoWrapper = styled.div`
    padding: 10px;
    background: linear-gradient(0deg, #13b0f5 0%, #e70faa 100%);
    border-radius: 230px;
    position: relative;
    
    &::after{
        content: '';
        display: inline-block;
        position: absolute;
        width: 630px;
        height: 630px;
        background-image: url(${abstract});
        bottom: -130px;
        right: -150px;
    }
`