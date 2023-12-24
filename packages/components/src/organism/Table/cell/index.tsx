/* eslint-disable react/jsx-key */
import classNames from "classnames";
import { ReactNode } from "react";
import { DEFAULT_ALIGN } from "..";
import { Text } from "../../../atoms/text";
import { useStyles } from "./style";
export interface CellProps
  extends Omit<React.TdHTMLAttributes<HTMLTableCellElement>, "align"> {
  children?: ReactNode;
  align?: "start" | "center" | "end";
  onPress?: () => void;
  ellipsis?: boolean;
}

const Cell = ({
  children,
  onPress,
  align = DEFAULT_ALIGN,
  ellipsis,
  ...rest
}: CellProps) => {
  const classes = useStyles();
  return (
    <td
      {...rest}
      style={{
        height: "inherit",
      }}
      onClick={onPress}
      className={classNames(
        align === "start" && classes["start"],
        align === "center" && classes["center"],
        align === "end" && classes["end"],
        ellipsis && classes["ellipsis"],
      )}
    >
      {typeof children !== "object" ? (
        <Text theme="Regular" size="small" color={"red"}>
          {children}
        </Text>
      ) : (
        children
      )}
    </td>
  );
};

export { Cell };
