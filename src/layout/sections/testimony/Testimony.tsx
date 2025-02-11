import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {Slider} from "../../../components/Slider.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";


export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} alignItems={"center"}>
                <Icon iconId={'logoBootstrap'}/>
                <Slider/>
            </FlexWrapper>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 100%;
    
    ${SectionTitle} {
        margin-bottom: 72px;
    }
`