import classNames from "classnames";
import React from "react";
import icomoonJson from "@shakil-design/asset/src/icomoon/selection.json";
import {
  IconTemplate,
  IcomoonIconSetProps,
  IconTemplateProps,
} from "./createIconSet";
import { IconsNames } from "./iconNames";

interface BaseIconProps
  extends Omit<
      React.HTMLAttributes<HTMLElement>,
      "className" | "style" | "children" | "color"
    >,
    Pick<IconTemplateProps, "name" | "size" | "color"> {
  wrapperStyle?: React.CSSProperties;
  wrapperClassName?: string;
}

const BaseIcon = React.forwardRef<HTMLDivElement, BaseIconProps>(
  ({ name, color, size, wrapperStyle, wrapperClassName, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(wrapperClassName)}
        style={{ display: "inline-flex", ...wrapperStyle }}
        {...rest}
      >
        <IconTemplate
          name={name}
          color={color}
          size={size}
          iconsJson={icomoonJson as unknown as IcomoonIconSetProps}
        />
      </div>
    );
  },
);

BaseIcon.displayName = "BaseIcon";

export { BaseIcon };
export type { IconsNames, BaseIconProps };
