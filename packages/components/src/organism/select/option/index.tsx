import classNames from "classnames";
import { Text } from "../../../atoms/text";
import { useTheme } from "../../../theme/context";
import { OptionProps } from "../types";
import { useStyles } from "./style";
const Option = ({ children, value, onClick, isSelected }: OptionProps) => {
  const { color_primary_1 } = useTheme();
  const classes = useStyles();
  const handleOnClick = () => {
    onClick(value);
  };

  return (
    <div
      onClick={handleOnClick}
      className={classNames(
        classes["item"],
        isSelected && classes["itemSelected"],
      )}
    >
      <Text size={16} theme={"Regular"} color={color_primary_1}>
        {children}
      </Text>
    </div>
  );
};

export { Option };
