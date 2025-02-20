
type FontPropsType = {
    fontFamily?: string;
    weight?: number;
    lineHeight?: number;
    Fmin?: number;
    Fmax?: number;
}

export const font = ({fontFamily, weight, lineHeight, Fmin, Fmax}: FontPropsType) =>`
    font-family: ${fontFamily || "Poppins"};
    font-weight: ${weight || 400};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1600 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`