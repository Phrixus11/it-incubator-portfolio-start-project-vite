import {S} from "./Contacts_Styles.ts";
import * as React from "react";



export const Field:React.FC<{id: string, title: string, as?: string}> = ({id, title, as}) => {
    return (
        <S.FieldWrapper>

            <S.Field as={as} placeholder={title} id={id} />
            <label htmlFor={id}>{title}</label>
        </S.FieldWrapper>
    );
};

