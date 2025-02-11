import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
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
            <FlexWrapper justifyContent={'space-between'}>
                <div className={'spanWrapper'}>
                    <NameApp>{props.nameApp}</NameApp>
                    <LocationName location={props.location}>{props.location}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42986.116236441114!2d-122.14099834922143!3d47.67213982286042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900cad2000ee23%3A0x5e0390eac5d804f2!2z0KDQtdC00LzQvtC90LQsINCS0LDRiNC40L3Qs9GC0L7QvSwg0KHQqNCQ!5e0!3m2!1sru!2s!4v1739280448622!5m2!1sru!2s"
                            width="600" height="450" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </LocationName>
                </div>

                <Date>{props.date}</Date>
            </FlexWrapper>
            <GoogleMap>

            </GoogleMap>


        </StyledExperienceCard>
    );
};


const StyledExperienceCard = styled.div`
    width: 100%;
    position: relative;

    div.spanWrapper {
        width: 55%;
        display: flex;
        justify-content: space-between;
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
    display: inline-block;
    font-weight: 600;
    font-size: 9px;
    line-height: 2.88889;
    text-align: center;
    color: #018c0f;
    width: 84px;
    height: 24px;
    border-radius: 100px;
    background-color: #d7ffe0;
`
const NameApp = styled.span`
    display: inline-block;
    font-weight: 500;
    font-size: 12px;
    line-height: 2.33333;
    letter-spacing: 0.08em;
    color: #a7a7a7;


    padding: 0 100px 0 20px;
    position: relative;

    &::before {
        content: "";
        width: 12px;
        height: 12px;
        background-image: url("${iconBuild}");
        display: inline-block;

        position: absolute;
        left: 0;
        bottom: 9px;
    }
`

type LocationNamePropsType = { location?: string }


const LocationName = styled.span<LocationNamePropsType>`
    display: inline-block;
    font-weight: 500;
    font-size: 12px;
    line-height: 2.33333;
    letter-spacing: 0.08em;
    color: #a7a7a7;

    position: relative;

    &::before {
        content: "";
        width: 12px;
        height: 12px;
        background-image: ${(props) => (props.location ? `url("${iconLocation}")` : "none")};
        display: inline-block;

        position: absolute;
        left: -20px;
        bottom: 9px;
    }

    iframe {
        position: absolute;
        transform: scale(0);
    }
    
    &:hover {
        cursor: pointer;
        iframe {
            transform: scale(1);
            z-index: 999;
        }
    }
    
`


const Date = styled.span`

    font-weight: 500;
    font-size: 12px;
    line-height: 2.33333;
    letter-spacing: 0.08em;
    color: #a7a7a7;
    display: inline-block;
    position: relative;

    &::before {
        content: "";
        width: 16px;
        height: 12px;
        background-image: url("${iconDate}");
        display: inline-block;
        position: absolute;
        left: -20px;
        bottom: 9px;
    }
`

const GoogleMap = styled.div`
`