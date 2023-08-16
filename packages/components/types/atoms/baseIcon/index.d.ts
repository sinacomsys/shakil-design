import React from "react";
import { Unit } from "../../types";
import { IconsNames } from "./iconNames";
interface BaseIconProps extends Omit<React.HTMLAttributes<HTMLElement>, "className" | "style" | "children" | "color"> {
    name?: IconsNames;
    size: {
        width: number;
        height: number;
    };
    color?: string | string[];
    wrapperStyle?: React.CSSProperties;
    wrapperClassName?: string;
    unit?: Unit;
}
declare const BaseIcon: React.ForwardRefExoticComponent<BaseIconProps & React.RefAttributes<HTMLDivElement>>;
export { BaseIcon };
export type { IconsNames, BaseIconProps };
