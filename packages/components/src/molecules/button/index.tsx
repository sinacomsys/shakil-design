import classNames from "classnames";
import _ from "lodash";
import React, { useMemo, useState } from "react";
import { Loading } from "../../atoms/loading";
import { Text } from "../../atoms/text";
import { useTheme } from "../../theme/context";
import { useStyles } from "./style";

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

    return (
      <button
        {...rest}
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
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {typeof children !== "object" ? (
            <Text size={16} color={color_white}>
              {children}
            </Text>
          ) : (
            children
          )}
        </div>
        {isLoading ? (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "53%",
              transform: "translate(-20px,-50%)",
            }}
          >
            <Loading isLoading spinnerColor={color_white} size={"medium"} />
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
