import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import iconBuild from '../../../assets/img/svgIcon/VectorBuild.svg';
import iconDate from '../../../assets/img/svgIcon/vector_date.svg';
import iconLocation from '../../../assets/img/svgIcon/vector_location.svg';

type ExperienceCardPropsType = {
    title: string,
    nameApp: string,
    location?: string,
    date: string,
    involvement: string,
}

export const ExperienceCard = (props: ExperienceCardPropsType) => {
    return (
        <StyledExperienceCard>
            <FlexWrapper justifyContent={'space-between'}>
                <TitleExperienceCard>{props.title}</TitleExperienceCard>
                <Involvement className={'inv'}>{props.involvement}</Involvement>
            </FlexWrapper>
            <FlexWrapper justifyContent={'space-between'} wrap={'wrap'} >
                <FlexWrapper className={'spanWrapper'} justifyContent={'space-between'} wrap={'wrap'}>
                    <NameApp>{props.nameApp}</NameApp>
                    <LocationName location={props.location}>{props.location}</LocationName>
                </FlexWrapper>

                <Date>{props.date}</Date>
            </FlexWrapper>
        </StyledExperienceCard>
    );
};


const StyledExperienceCard = styled.div`
    width: 100%;
    position: relative;

    ${FlexWrapper}.spanWrapper {
        
        width: 48%;
        @media (max-width: 760px) {
            flex-direction: column;
        }
    }

    span {
        font-weight: 500;
        font-size: 12px;
        line-height: 2.33333;
        letter-spacing: 0.08em;
        color: #a7a7a7;
        padding-left: 20px;
    }
    
    &::after {
        content: '';
        display: inline-block;
        background-color: #ebeaed;
        height: 2px;
        width: 100%;

        position: relative;
        bottom: -10px;
    }
`


const TitleExperienceCard = styled.h3`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: #ccc;
`
const Involvement = styled.span`
    && {
        font-weight: 600;
        font-size: 9px;
        line-height: 2.88889;
        color: #018c0f;
        width: 84px;
        height: 24px;
        border-radius: 100px;
        background-color: #d7ffe0;
        padding-left: 0;
        text-align: center;
    }
`
const NameApp = styled.span`
    display: inline-block;
    position: relative;
    white-space: nowrap;

    &::before {
        content: "";
        width: 12px;
        height: 12px;
        background-image: url("${iconBuild}");
        display: inline-block;

        position: absolute;
        left: 0;
        top: 9px;
    }
`

type LocationNamePropsType = { location?: string }


const LocationName = styled.span<LocationNamePropsType>`
    display: inline-block;
    position: relative;

    &::before {
        content: "";
        width: 12px;
        height: 12px;
        background-image: ${(props) => (props.location ? `url("${iconLocation}")` : "none")};
        display: inline-block;

        position: absolute;
        left: 0;
        bottom: 9px;
    }
`


const Date = styled.span`
    display: inline-block;
    position: relative;
    padding-left: 20px;

    &::before {
        content: "";
        width: 16px;
        height: 12px;
        background-image: url("${iconDate}");
        display: inline-block;
        position: absolute;
        left: 0;
        top: 9px;
    }
`