import svgSprite from "../../assets/img/svgSprite.svg";

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "100"} height={props.height || "100"} viewBox={props.viewBox || "0 0 120 120"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${svgSprite}#${props.iconId}`}/>
        </svg>
    );
};
