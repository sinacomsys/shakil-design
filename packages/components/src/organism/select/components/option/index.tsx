import { Text } from "../../../../atoms/text";
import { useStyles } from "./style";
import { CheckBox } from "../../../../molecules";

export interface OptionProps {
  isSelected: boolean;
  children: React.ReactNode;
  onClick: () => void;
  multiple: boolean;
}

const Option = ({ children, onClick, isSelected, multiple }: OptionProps) => {
  const classes = useStyles();

  return (
    <div onClick={onClick} className={classes["item"]}>
      {multiple ? (
        <div style={{ marginInlineEnd: 5 }}>
          <CheckBox checked={isSelected} />
        </div>
      ) : null}
      <Text ellipsis size={16} theme={"Regular"} color={"#575757"}>
        {children}
      </Text>
    </div>
  );
};

export { Option };
