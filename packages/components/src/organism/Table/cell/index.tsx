import { ReactNode } from "react";
import { Text } from "../../../atoms/text";
export interface CellProps
  extends Omit<React.TdHTMLAttributes<HTMLTableCellElement>, "align"> {
  children?: ReactNode;
}

const Cell = ({ children, ...rest }: CellProps) => {
  return (
    <td
      {...rest}
      style={{
        height: "inherit",
      }}
    >
      {typeof children !== "object" ? (
        <Text theme="Regular" size={14}>
          {children}
        </Text>
      ) : (
        children
      )}
    </td>
  );
};

export { Cell };
