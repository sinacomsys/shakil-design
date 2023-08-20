import { useWindowSize } from "usehooks-ts";
import { useTheme } from "../../../theme/context";
import { pxToVh } from "@shakil-design/utils";
import { Unit } from "../../../types";
import { WIDTH } from ".";

const indeterminate = 6;

interface IndeterminateProps {
  unit: Unit;
}

const Indeterminate = ({ unit }: IndeterminateProps) => {
  const { color_white: borderColor, color_secondary_1: backgroundColor } =
    useTheme();

  const { height: windowHeight } = useWindowSize();
  const vh = windowHeight / 100;

  const width =
    unit === "pixel" ? WIDTH : 2 * Math.round((pxToVh(WIDTH) * vh) / 2);

  const smallSquareWidth =
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
          width: smallSquareWidth,
          height: smallSquareWidth,
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
