import { Text } from "../../../atoms/text";
import { OptionProps } from "../types";
import { useStyles } from "./style";
import { CheckBox } from "../../../molecules";

const Option = ({
  children,
  value,
  onClick,
  isSelected,
  multiple,
}: OptionProps) => {
  const classes = useStyles();
  const handleOnClick = () => {
    onClick(value.value);
  };

  return (
    <div onClick={handleOnClick} className={classes["item"]}>
      {multiple ? (
        <div style={{ marginInlineEnd: 5 }}>
          <CheckBox checked={isSelected} />
        </div>
      ) : null}
      <Text size={16} theme={"Regular"} color={"#575757"}>
        {children}
      </Text>
    </div>
  );
};

export { Option };
