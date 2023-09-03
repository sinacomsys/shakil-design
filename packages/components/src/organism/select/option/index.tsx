import classNames from "classnames";
import { Text } from "../../../atoms/text";
import { OptionProps } from "../types";
import { useStyles } from "./style";
const Option = ({ children, value, onClick, isSelected }: OptionProps) => {
  const classes = useStyles();
  const handleOnClick = () => {
    onClick(value.value);
  };

  return (
    <div
      onClick={handleOnClick}
      className={classNames(
        classes["item"],
        isSelected && classes["itemSelected"],
      )}
    >
      <Text size={16} theme={"Regular"} color={"#575757"}>
        {children}
      </Text>
    </div>
  );
};

export { Option };
