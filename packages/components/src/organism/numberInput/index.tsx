import { BaseIcon } from "../../atoms";
import { TextInput, TextInputProps } from "../../molecules";
import { theming } from "../../theme";
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
  ...rest
}: NumberInput) => {
  const { color_primary_1, color_gray_4 } = useTheme();
  return (
    <div style={{ position: "relative", ...wrapperStyle }}>
      <BaseIcon
        name={"Amount-Boxes_Decrease"}
        size={{ height: 7, width: 12 }}
        unit={"pixel"}
        wrapperStyle={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        color={rest.disabled ? color_gray_4 : color_primary_1}
        onClick={onDecrease}
      />
      <BaseIcon
        onClick={onIncrease}
        color={rest.disabled ? color_gray_4 : color_primary_1}
        name={"Amount-Boxes_Increase"}
        size={{ height: 7, width: 12 }}
        unit={"pixel"}
        wrapperStyle={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      />
      <TextInput
        {...rest}
        style={{ paddingInline: 24, textAlign: "center", ...rest.style }}
      />
    </div>
  );
};

export { NumberInput };
