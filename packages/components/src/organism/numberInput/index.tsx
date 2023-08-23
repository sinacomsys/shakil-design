import { pxToVh, pxToVhString } from "@shakil-design/utils";
import { BaseIcon } from "../../atoms";
import { TextInput, TextInputProps } from "../../molecules";
import { theming } from "../../theme";
import { useStyles } from "./style";
const { useTheme } = theming;

interface NumberInput extends TextInputProps {
  onDecrease?: () => void;
  onIncrease?: () => void;
  wrapperStyle?: React.CSSProperties;
}

const NumberInput = ({
  wrapperStyle,
  onDecrease,
  onIncrease,
  unit = "viewport",
  ...rest
}: NumberInput) => {
  const classes = useStyles();
  const { disableField } = useTheme();
  const iconWidth = unit === "viewport" ? pxToVh(12) : 12;
  const iconHeight = unit === "viewport" ? pxToVh(7) : 7;
  const fontSize = unit === "viewport" ? pxToVhString(14) : 14;
  return (
    <div style={{ position: "relative", ...wrapperStyle }}>
      <TextInput
        {...rest}
        unit={unit}
        className={classes["input"]}
        style={{
          paddingInline: 24,
          textAlign: "center",
          fontSize: fontSize,
          ...rest.style,
        }}
      />
      <BaseIcon
        name={"Amount-Boxes_Decrease"}
        size={{ height: iconHeight, width: iconWidth }}
        unit={unit}
        wrapperClassName={classes["arrowDown"]}
        color={rest.disabled ? disableField : "#575757"}
        onClick={onDecrease}
      />
      <BaseIcon
        onClick={onIncrease}
        color={rest.disabled ? disableField : "#575757"}
        name={"Amount-Boxes_Increase"}
        size={{ height: iconHeight, width: iconWidth }}
        unit={unit}
        wrapperClassName={classes["arrowUp"]}
      />
    </div>
  );
};

export { NumberInput };
