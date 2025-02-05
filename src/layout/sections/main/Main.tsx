import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import photo from "../../../assets/img/proj-1.webp";
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain id={'Home'}>
            <FlexWrapper alignItems={"center"} justifyContent={"space-around"} >
                <div>
                    <p>Hi 👋</p>
                    <p>My name is</p>
                    <Name>Jury Rashkosky</Name>
                    <h2>I am a Front-end Developer</h2>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: bisque;

`

const Name = styled.h2`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`


const Photo = styled.img`
    width: 250px;
    height: 250px;
`