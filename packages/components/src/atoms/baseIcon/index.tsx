import classNames from "classnames";
import React from "react";
import icomoonJson from "@sina-base/asset/src/icomoon/selection.json";
import {
  createIcomoonIconSet,
  CreateIcomoonIconSetProps,
} from "./createIconSet";
// import './icon';
import { IconsNames } from "./iconNames";
const IconMoon = createIcomoonIconSet(
  icomoonJson as unknown as CreateIcomoonIconSetProps,
);

export type Unit = "viewPort" | "pixel";

interface BaseIconProps
  extends Omit<
    React.HTMLAttributes<HTMLElement>,
    "className" | "style" | "children" | "color"
  > {
  name?: IconsNames;
  size: { width: number; height: number };
  color?: string | string[];
  wrapperStyle?: React.CSSProperties;
  wrapperClassName?: string;
  unit?: Unit;
}

const BaseIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  (
    {
      name,
      color,
      size,
      wrapperStyle,
      wrapperClassName,
      unit = "pixel",
      ...rest
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(wrapperClassName)}
        style={{ display: "inline-flex", ...wrapperStyle }}
        {...rest}
      >
        <IconMoon
          name={name}
          color={color}
          size={{ height: size.height, width: size.width }}
          unit={unit}
        />
      </div>
    );
  },
);

BaseIcon.displayName = "BaseIcon";

export { BaseIcon };
export type { IconsNames, BaseIconProps };
