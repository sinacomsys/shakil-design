import classNames from "classnames";
import _ from "lodash";
import React, { useMemo, useState } from "react";
import { Spinner } from "../../atoms";
import { Text } from "../../atoms/text";
import { useTheme } from "../../theme";
import { useStyles } from "./style";
type Mode = "main" | "success" | "danger";

export type Ripple = {
  top: string;
  left: string;
  height: string;
  width: string;
  id: number;
};
export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "type" | "children"> {
  htmlType?: "submit" | "button" | "reset";
  mode?: Mode;
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  form?: string;
  size?: "small" | "middle";
  ghost?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      mode = "main",
      htmlType = "button",
      form,
      className,
      isLoading,
      disabled,
      onClick,
      size = "middle",
      ghost,
      ...rest
    },
    ref,
  ) => {
    const {
      button: {
        danger: dangerColor,
        main: mainColor,
        success: successColor,
      } = {},
    } = useTheme();

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

    const isMainGhost = ghost && mode === "main";
    const isSuccessGhost = ghost && mode === "success";
    const isDangerGhost = ghost && mode === "danger";

    const spinnerColor = isMainGhost
      ? mainColor
      : isSuccessGhost
      ? successColor
      : isDangerGhost
      ? dangerColor
      : "black";

    return (
      <button
        {...rest}
        style={{
          ...rest.style,
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
          mode === "main" && classes["buttonMain"],
          mode === "success" && classes["buttonSuccess"],
          mode === "danger" && classes["buttonDanger"],
          size === "small" && `${classes["button"]}--small`,
          size === "middle" && `${classes["button"]}--middle`,
          isMainGhost && classes["ghostMain"],
          isSuccessGhost && classes["ghostSuccess"],
          isDangerGhost && classes["ghostDanger"],
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
            <Text style={{ color: "inherit" }} size={16}>
              {children}
            </Text>
          ) : (
            children
          )}
        </div>
        {isLoading ? (
          <div className={classes["loadingContainer"]}>
            <Spinner spinerColor={spinnerColor} size={"medium"} />
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
