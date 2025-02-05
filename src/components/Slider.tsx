import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper.tsx";


export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, soluta?</Text>
                    <Name>Ivanov Ivan Ivanovich</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: 1px solid red;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`

    text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`

`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        background-color: aqua;
    }
`