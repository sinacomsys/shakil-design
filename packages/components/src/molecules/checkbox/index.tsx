import React from "react";
import { Text } from "../../atoms/text";
import { Indeterminate } from "./indeterminate";
import { CustomSquare } from "./customSquare";
import { useStyles } from "./style";
import classNames from "classnames";

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  indeterminate?: boolean;
}

const CheckBox = ({
  checked,
  value,
  onChange,
  children,
  name,
  indeterminate,
  ...rest
}: CheckBoxProps) => {
  const classes = useStyles();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <label className={classes["label"]}>
      <div
        data-is-checked={checked}
        className={classNames(
          classes["check-box-wrapper"],
          typeof children !== "undefined" &&
            `${classes["check-box-wrapper"]}--with-label`,
        )}
      >
        {indeterminate ? <Indeterminate /> : <CustomSquare checked={checked} />}

        <input
          className={classes["hiddenInput"]}
          type={"checkbox"}
          value={value}
          name={name}
          data-is-checked={checked}
          checked={checked}
          onChange={onChangeHandler}
          {...rest}
        />
      </div>

      {typeof children === "string" ? <Text>{children}</Text> : children}
    </label>
  );
};

export { CheckBox };
