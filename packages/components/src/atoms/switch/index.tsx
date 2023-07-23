import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../theme/context";

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  checked?: boolean;
  onChange?: (
    checked: boolean,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  name?: string;
}

const CIRCLE_WIDTH = 10;

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ onChange, checked, name, onFocus, onBlur, ...rest }, ref) => {
    const { color_secondary_1, color_warning_3 } = useTheme();
    const [isCheck, setIsCheck] = useState<boolean>(false);
    const [isFocused, setFocus] = useState(false);

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setIsCheck((prev) => !prev);
      onChange?.(!isCheck, e);
    };

    useEffect(() => {
      checked && setIsCheck(checked);
    }, [checked]);

    const focusHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
      setFocus(true);
      onFocus?.(e);
    };

    const blurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
      setFocus(false);
      onBlur?.(e);
    };

    return (
      <label style={{ display: "inline-block", position: "relative" }}>
        <div
          role={"switch"}
          style={{
            width: 26,
            height: 14,
            backgroundColor: isCheck ? color_secondary_1 : color_warning_3,
            borderRadius: 8,
            border: 0,
            outline: "none",
            padding: 2,
            position: "relative",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          <input
            {...rest}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              margin: 0,
              opacity: 0,
            }}
            ref={ref}
            onChange={handleOnChange}
            onFocus={focusHandler}
            onBlur={blurHandler}
            checked={isCheck}
            type={"checkbox"}
            name={name}
          />
          <div style={{ position: "relative", height: "100%" }}>
            <motion.div
              animate={{ left: isCheck ? `calc(100% - ${CIRCLE_WIDTH}px)` : 0 }}
              style={{
                width: CIRCLE_WIDTH,
                height: CIRCLE_WIDTH,
                border: "2px solid white",
                borderRadius: "50%",
                position: "absolute",
              }}
            />
          </div>
        </div>
        <motion.div
          style={{
            opacity: 0.2,
            backgroundColor: isCheck ? color_secondary_1 : color_warning_3,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            borderRadius: 8,
            zIndex: 1,
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
