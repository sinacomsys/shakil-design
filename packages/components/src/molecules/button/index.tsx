import classNames from "classnames";
import _ from "lodash";
import React, { useMemo, useState } from "react";
import { Spinner } from "../../atoms";
import { Text } from "../../atoms/text";
import { useTheme } from "../../theme/context";
import { useStyles } from "./style";
import { Unit } from "../../types";
import { pxToVh } from "@shakil-design/utils";

type Ripple = {
  top: string;
  left: string;
  height: string;
  width: string;
  id: number;
};
export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "type" | "children"> {
  htmlType?: "submit" | "button" | "reset";
  mode?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  form?: string;
  size?: "small" | "middle";
  unit?: Unit;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      mode = "primary",
      htmlType = "button",
      form,
      className,
      isLoading,
      disabled,
      onClick,
      size,
      unit = "pixel",
      ...rest
    },
    ref,
  ) => {
    const { color_white } = useTheme();
    const classes = useStyles();
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const showRipple = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isLoading) return;
      const rippleContainer = e.currentTarget;
      const size = rippleContainer.offsetWidth;
      const pos = rippleContainer.getBoundingClientRect();
      const x = e.pageX - pos.x - size / 2;
      const y = e.pageY - pos.y - size / 2;
      const spanStyles = {
        top: y + "px",
        left: x + "px",
        height: size + "px",
        width: size + "px",
        id: Date.now(),
      };

      setRipples((prev) => {
        return [...prev, spanStyles];
      });
    };

    const handleOnClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
      onClick?.(e);
    };

    const renderRipple = () => {
      if (ripples.length > 0) {
        return ripples.map(({ id, ...rest }) => {
          return (
            <span style={{ ...rest }} key={id} className={classes["ripple"]} />
          );
        });
      }
    };

    const onDebounce = useMemo(
      () =>
        _.debounce(() => {
          setRipples([]);
        }, 1000),
      [],
    );

    const height = size === "small" ? 32 : 40;
    const fontSize = unit === "viewport" ? `${pxToVh(16)}vh` : 16;

    return (
      <button
        {...rest}
        style={{
          ...rest.style,
          height: unit === "viewport" ? `${pxToVh(height)}vh` : height,
          cursor: disabled || isLoading ? "not-allowed" : "pointer",
        }}
        ref={ref}
        form={form}
        type={htmlType}
        onMouseDown={showRipple}
        onMouseUp={onDebounce}
        onClick={handleOnClick}
        disabled={disabled || isLoading}
        className={classNames(
          classes["button"],
          mode === "primary" && classes["buttonPrimary"],
          mode === "secondary" && classes["buttonSecondary"],
          className,
        )}
      >
        <div
          className={classes["textContainer"]}
          style={{
            visibility: isLoading ? "hidden" : "visible",
          }}
        >
          {typeof children !== "object" ? (
            <Text size={fontSize} color={color_white}>
              {children}
            </Text>
          ) : (
            children
          )}
        </div>
        {isLoading ? (
          <div className={classes["loadingContainer"]}>
            <Spinner spinerColor="white" size={"medium"} />
          </div>
        ) : null}
        {(isLoading || disabled) && <div className={classes["cover"]} />}
        {renderRipple()}
      </button>
    );
  },
);

Button.displayName = "Button";
export { Button };
