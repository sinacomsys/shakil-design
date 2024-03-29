import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Text } from "../../../atoms/text";
import { useTheme } from "../../../theme";
import { pxToVhString } from "@shakil-design/utils/src";
import { RadioContext, ValueType } from "../context";
import { CustomCircle } from "./customCircle";
import { useStyles } from "./style";
import { UnitContext } from "../../../theme/context";
export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "name"> {
  children?: React.ReactNode;
  value: ValueType;
  "data-testid"?: string | number;
}
const InternalRadio = React.forwardRef<HTMLDivElement, RadioProps>(
  (
    { children, value, onFocus, onBlur, "data-testid": testid, ...rest },
    ref,
  ) => {
    const classes = useStyles();
    const {
      radio: {
        disableInnerCircleSelected,
        disableInnerCricleUnselected,
        disableStroke,
        enableInnerCircleSelected,
        enableInnerCircleUnselected,
        enableStroke,
      } = {},
      disableText,
      primary,
    } = useTheme();
    const [isFocused, setFocus] = useState(false);
    const { onChange, value: contextValue, name } = useContext(RadioContext);

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

    const isChecked = _value === contextValue || rest.checked;
    const isDisabled = rest.disabled;

    const isCheckedEnable = isChecked && !isDisabled;
    const isCheckedDisable = isChecked && isDisabled;
    const isUncheckedEnable = !isChecked && !isDisabled;
    const isUncheckedDisable = !isChecked && isDisabled;

    const borderColor = isDisabled ? disableStroke : enableStroke;
    const circleColor = isCheckedEnable
      ? enableInnerCircleSelected
      : isCheckedDisable
      ? disableInnerCircleSelected
      : (isUncheckedEnable || isUncheckedDisable) &&
        (enableInnerCircleUnselected || disableInnerCricleUnselected);

    const { unit } = useContext(UnitContext);

    const rippleSize = unit === "viewport" ? pxToVhString(20) : 20;

    return (
      <label className={classes["label"]}>
        <div
          data-is-checked={isChecked}
          ref={ref}
          className={classes["container"]}
          data-testid={testid}
        >
          <motion.div
            className={classes["ripple"]}
            animate={{
              width: isFocused ? rippleSize : 0,
              height: isFocused ? rippleSize : 0,
            }}
          />
          <CustomCircle
            {...{ borderColor, backgroundColor: circleColor as string }}
          />
          <input
            className={classes["input"]}
            onFocus={focusHandler}
            onBlur={blurHandler}
            onChange={onChangeHandler}
            type={"radio"}
            value={_value}
            name={name}
            checked={isChecked}
            data-is-checked={isChecked}
            {...rest}
          />
        </div>

        {typeof children === "string" ? (
          <Text color={isDisabled ? disableText : primary}>{children}</Text>
        ) : (
          children
        )}
      </label>
    );
  },
);

InternalRadio.displayName = "InternalRadio";

export { InternalRadio };
