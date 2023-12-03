import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTheme } from "../../theme";
import { useStyles } from "./style";
import { Unit } from "../../types";
import { pxToVhString } from "@shakil-design/utils";

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  unit?: Unit;
  testId?: string;
}

const CIRCLE_WIDTH = 12;
const SWITCH_WIDTH = 30;
const SWITCH_HEIGHT = 16;

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      testId,
      onChange,
      checked,
      name,
      onFocus,
      onBlur,
      unit = "viewport",
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles();
    const { switch: { checked: checkedColor, unchecked } = {} } = useTheme();
    // const [isCheck, setIsCheck] = useState<boolean>(false);
    const [isFocused, setFocus] = useState(false);

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      onChange?.(e);
    };

    const focusHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
      setFocus(true);
      onFocus?.(e);
    };

    const blurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
      setFocus(false);
      onBlur?.(e);
    };

    const _width =
      unit === "viewport" ? pxToVhString(SWITCH_WIDTH) : SWITCH_WIDTH;
    const _height =
      unit === "viewport" ? pxToVhString(SWITCH_HEIGHT) : SWITCH_HEIGHT;
    const _circle =
      unit === "viewport" ? pxToVhString(CIRCLE_WIDTH) : `${CIRCLE_WIDTH}px`;

    return (
      <label style={{ display: "inline-block", position: "relative" }}>
        <div
          data-testid={testId}
          role={"switch"}
          className={classes["wrapper"]}
          style={{
            backgroundColor: checked ? checkedColor : unchecked,
            width: _width,
            height: _height,
          }}
        >
          <input
            {...rest}
            className={classes["hiddenCheckbox"]}
            ref={ref}
            onChange={handleOnChange}
            onFocus={focusHandler}
            onBlur={blurHandler}
            aria-checked={checked}
            checked={checked}
            type={"checkbox"}
            name={name}
          />
          <div style={{ position: "relative", height: "100%" }}>
            <motion.div
              animate={{ left: checked ? `calc(100% - ${_circle})` : 0 }}
              style={{
                width: _circle,
                height: _circle,
              }}
              className={classes["circle"]}
            />
          </div>
        </div>
        <motion.div
          className={classes["ripple"]}
          style={{
            backgroundColor: checked ? checkedColor : unchecked,
          }}
          animate={{
            width: isFocused ? 30 : 0,
            height: isFocused ? 20 : 0,
          }}
        />
      </label>
    );
  },
);

Switch.displayName = "Switch";

export { Switch };
export type { SwitchProps };
