import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper.tsx";


export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam aliquid cumque eius eos explicabo laboriosam nesciunt odit voluptas. A ab distinctio dolor est eum omnis quasi sed unde?   </Text>
                    <Name>Ivanov Ivan Ivanovich</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={'active'}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 1.44444;
    color: #ccc;
`

const Name = styled.span`
    color: #ccc;
    display: inline-block;
    margin: 15px 0 35px;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        border-radius: 20px;
        width: 7px;
        height: 7px;
        background: rgba(255, 255, 255, 0.5);

        & + span {
            margin-left: 5px;
        }

        .active {
            width: 20px;
            background-color: #7572d5;
        }
    }
`