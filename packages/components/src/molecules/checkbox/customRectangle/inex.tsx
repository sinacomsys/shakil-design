import { useWindowSize } from "usehooks-ts";
import { useTheme } from "../../../theme/context";
import { pxToVh } from "@shakil-design/utils";
import { Unit } from "../../../../types";

export const WIDTH = 16;
const indeterminate = 10;
interface CustomRectangleProps {
  mode?: "dark" | "light";
  checked?: boolean;
  unit?: Unit;
}

const CustomRectangle = ({ mode, checked, unit }: CustomRectangleProps) => {
  const {
    color_secondary_1,
    color_white,
    color_primary_1,
    color_primary_3,
    color_primary_6,
  } = useTheme();
  const { height: windowHeight } = useWindowSize();
  const vh = windowHeight / 100;
  const isLightChecked = mode === "light" && checked;
  const isLightUnChecked = mode === "light" && !checked;
  const isDarkChecked = mode === "dark" && checked;
  const isDarkUnChecked = mode === "dark" && !checked;

  const borderColor = isLightChecked
    ? color_secondary_1
    : isLightUnChecked
    ? color_white
    : (isDarkChecked || isDarkUnChecked) && color_primary_1;

  const backgroundColor = isLightChecked
    ? color_secondary_1
    : isLightUnChecked
    ? color_primary_3
    : isDarkChecked
    ? color_secondary_1
    : isDarkUnChecked
    ? color_primary_6
    : color_primary_6;

  const width =
    unit === "pixel" ? WIDTH : 2 * Math.round((pxToVh(WIDTH) * vh) / 2);

  const indeterminateWidth =
    unit === "pixel"
      ? indeterminate
      : 2 * Math.round((pxToVh(indeterminate) * vh) / 2);

  return (
    <div
      style={{
        width: width,
        height: width,
        borderRadius: 3,
        border: `1px solid ${borderColor}`,
        position: "relative",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: indeterminateWidth,
          height: indeterminateWidth,
          backgroundColor: backgroundColor,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export { CustomRectangle };
