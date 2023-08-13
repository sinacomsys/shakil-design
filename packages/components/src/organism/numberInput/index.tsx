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
  unit = "viewPort",
  ...rest
}: NumberInput) => {
  const classes = useStyles();
  const { color_primary_1, color_gray_4 } = useTheme();
  const iconWidth = unit === "viewPort" ? pxToVh(12) : 12;
  const iconHeight = unit === "viewPort" ? pxToVh(7) : 7;
  const fontSize = unit === "viewPort" ? pxToVhString(14) : 14;
  return (
    <div style={{ position: "relative", ...wrapperStyle }}>
      <BaseIcon
        name={"Amount-Boxes_Decrease"}
        size={{ height: iconHeight, width: iconWidth }}
        unit={unit}
        wrapperClassName={classes["arrowDown"]}
        color={rest.disabled ? color_gray_4 : color_primary_1}
        onClick={onDecrease}
      />
      <BaseIcon
        onClick={onIncrease}
        color={rest.disabled ? color_gray_4 : color_primary_1}
        name={"Amount-Boxes_Increase"}
        size={{ height: iconHeight, width: iconWidth }}
        unit={unit}
        wrapperClassName={classes["arrowUp"]}
      />
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
    </div>
  );
};

export { NumberInput };
