import React from "react";
import { IconTemplateProps } from "./createIconSet";
import { IconsNames } from "./iconNames";
interface BaseIconProps extends Omit<React.HTMLAttributes<HTMLElement>, "className" | "style" | "children" | "color">, Pick<IconTemplateProps, "name" | "size" | "color"> {
    wrapperStyle?: React.CSSProperties;
    wrapperClassName?: string;
}
declare const BaseIcon: React.ForwardRefExoticComponent<BaseIconProps & React.RefAttributes<HTMLDivElement>>;
export { BaseIcon };
export type { IconsNames, BaseIconProps };
