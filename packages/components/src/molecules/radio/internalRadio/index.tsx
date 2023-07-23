import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { Text } from "../../../atoms/text";
import { useTheme } from "../../../theme/context";
import { pxToVh } from "@sina-base/utils";
import { RadioContext, ValueType } from "../context";
import { CustomCircle } from "./customCircle";
import { useStyles } from "./style";
export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "name"> {
  children?: React.ReactNode;
  value: ValueType;
}
const InternalRadio = React.forwardRef<HTMLDivElement, RadioProps>(
  ({ children, value, onFocus, onBlur, ...rest }, ref) => {
    const classes = useStyles();
    const {
      color_gray_4,
      color_secondary_1,
      color_white,
      color_primary_1,
      color_primary_3,
      color_primary_6,
    } = useTheme();
    const [isFocused, setFocus] = useState(false);

    const { height: windowHeight } = useWindowSize();
    const vh = windowHeight / 100;

    const {
      onChange,
      value: contextValue,
      mode,
      name,
    } = useContext(RadioContext);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e);
    };

    const focusHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
      onFocus?.(e);
      setFocus(true);
    };

    const blurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
      onBlur?.(e);
      setFocus(false);
    };

    const _value: React.InputHTMLAttributes<HTMLInputElement>["value"] = value
      ? value
      : undefined;

    const isChecked = _value === contextValue;

    const isLightChecked = mode === "light" && isChecked;
    const isLightUnChecked = mode === "light" && !isChecked;
    const isDarkChecked = mode === "dark" && isChecked;
    const isDarkUnChecked = mode === "dark" && !isChecked;

    const isDisabled = rest.disabled;

    const borderColor = isDisabled
      ? color_gray_4
      : isLightChecked
      ? color_secondary_1
      : isLightUnChecked
      ? color_white
      : isDarkChecked || isDarkUnChecked
      ? color_primary_1
      : color_primary_1;

    const backgroundColor = isDisabled
      ? color_gray_4
      : isLightChecked
      ? color_secondary_1
      : isLightUnChecked
      ? color_primary_3
      : isDarkChecked
      ? color_secondary_1
      : isDarkUnChecked
      ? color_primary_6
      : color_primary_6;

    return (
      <label className={classes["label"]}>
        <div ref={ref} className={classes["container"]}>
          <CustomCircle {...{ borderColor, backgroundColor }} />
          <input
            className={classes["input"]}
            onFocus={focusHandler}
            onBlur={blurHandler}
            onChange={onChangeHandler}
            type={"radio"}
            value={_value}
            name={name}
            checked={_value === contextValue}
            {...rest}
          />
          <motion.div
            className={classes["ripple"]}
            animate={{
              width: isFocused ? 2 * Math.round((pxToVh(25) * vh) / 2) : 0,
              height: isFocused ? 2 * Math.round((pxToVh(25) * vh) / 2) : 0,
            }}
          />
        </div>

        {typeof children === "string" ? (
          <span>
            <Text
              color={isDisabled ? color_gray_4 : color_primary_1}
              size={`${pxToVh(16)}vh`}
            >
              {children}
            </Text>
          </span>
        ) : (
          <span>{children}</span>
        )}
      </label>
    );
  },
);

InternalRadio.displayName = "InternalRadio";

export { InternalRadio };
