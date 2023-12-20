import classNames from "classnames";
import * as React from "react";
import { BaseText, BaseTextProps, Variant } from "./baseText/baseText";
import { fonts, fontWeights, useFonts, useStyles } from "./style";
import { UnitContext } from "../../theme/context";
import { pxToVhString } from "@shakil-design/utils";

interface TextProps extends BaseTextProps {
  theme?: keyof typeof fonts;
  weight?: keyof typeof fontWeights | number;
  color?: string;
  size?: number | string;
}

const Text = React.memo(
  React.forwardRef<HTMLDivElement, TextProps>(
    (
      {
        theme = "Regular",
        className,
        color,
        style,
        size = 16,
        weight,
        variant,
        lineHeight,
        ...rest
      },
      ref,
    ) => {
      const fonts = useFonts();
      const classes = useStyles();
      const { unit } = React.useContext(UnitContext);

      const fontSize =
        unit === "viewport" && typeof size === "number"
          ? pxToVhString(size)
          : size;

      const fontWeight =
        typeof weight === "string" ? fontWeights[weight] : weight;
      const setVariant = (): Variant => {
        if (typeof size !== "number" && size?.match(/h(1|2|3|4|5|6)/g)) {
          return size as Variant;
        }
        return "p";
      };

      return (
        <BaseText
          ref={ref}
          variant={variant || setVariant()}
          className={classNames(fonts[theme], className, classes.text)}
          style={{
            color,
            fontWeight,
            lineHeight,
            fontSize,
            ...style,
          }}
          {...rest}
        />
      );
    },
  ),
);

export { Text, fonts };
export type { TextProps };
