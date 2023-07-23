import { useWindowSize } from "usehooks-ts";
import { useTheme } from "../../../theme/context";
import { pxToVh } from "@sina-base/utils";

const CustomRectangle = ({
  mode,
  checked,
}: {
  mode?: "dark" | "light";
  checked?: boolean;
}) => {
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

  return (
    <div
      style={{
        width: 2 * Math.round((pxToVh(20) * vh) / 2),
        height: 2 * Math.round((pxToVh(20) * vh) / 2),
        borderRadius: 3,
        border: `1px solid ${borderColor}`,
        position: "relative",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 2 * Math.round((pxToVh(12) * vh) / 2),
          height: 2 * Math.round((pxToVh(12) * vh) / 2),
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
