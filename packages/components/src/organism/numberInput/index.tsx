import { BaseIcon } from "../../atoms";
import { TextInput, TextInputProps } from "../../molecules";
import { theming } from "../../theme";
import { useStyles } from "./style";
const { useTheme } = theming;

interface NumberInput extends TextInputProps {
  onDecrease?: () => void;
  onIncrease?: () => void;
  wrapperStyle?: React.CSSProperties;
  wrapperClassName?: string;
}

const NumberInput = ({
  wrapperStyle,
  onDecrease,
  onIncrease,
  unit = "viewport",
  wrapperClassName,
  ...rest
}: NumberInput) => {
  const classes = useStyles();
  const { disableField } = useTheme();

  return (
    <div
      className={wrapperClassName && wrapperClassName}
      style={{ position: "relative", ...wrapperStyle }}
    >
      <TextInput
        {...rest}
        unit={unit}
        className={classes["input"]}
        style={{
          ...rest.style,
        }}
      />
      <BaseIcon
        name={"Amount-Boxes_Decrease"}
        size={{ height: 7, width: 7 }}
        wrapperClassName={classes["arrowDown"]}
        color={rest.disabled ? disableField : "#575757"}
        onClick={onDecrease}
      />
      <BaseIcon
        onClick={onIncrease}
        color={rest.disabled ? disableField : "#575757"}
        name={"Amount-Boxes_Increase"}
        size={{ height: 7, width: 7 }}
        wrapperClassName={classes["arrowUp"]}
      />
    </div>
  );
};

export { NumberInput };
