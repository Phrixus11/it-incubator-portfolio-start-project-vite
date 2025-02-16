import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Menu} from "../../../components/menu/Menu.tsx";
import {SocialLink} from "../../../components/socialLink/SocialLink.tsx";
import * as React from "react";


export const DesktopMenu: React.FC = () => {
    return (
         <FlexWrapper gap={'50px'} alignItems={'center'} justifyContent={'flex-end'} wrap={'wrap'}>
            <Menu/>
            <SocialLink/>
        </FlexWrapper>
    );
};
