import { useWindowSize } from "usehooks-ts";
import { useTheme } from "../../../theme/context";
import { pxToVh } from "@sina-base/utils";

const Indeterminate = () => {
  const { color_white: borderColor, color_secondary_1: backgroundColor } =
    useTheme();

  const { height: windowHeight } = useWindowSize();
  const vh = windowHeight / 100;
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
          width: 2 * Math.round((pxToVh(8) * vh) / 2),
          height: 2 * Math.round((pxToVh(8) * vh) / 2),
          backgroundColor: backgroundColor,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export { Indeterminate };
