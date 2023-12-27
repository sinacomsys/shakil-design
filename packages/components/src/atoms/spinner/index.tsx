import { pxToVh } from "@shakil-design/utils/src";
import { Unit } from "../../types";
import { useTheme, Colors } from "../../theme";
import { useStyle } from "./style";
import { UnitContext } from "../../theme/context";
import { useContext } from "react";

const SMALL_BORDER = 1;
const MEDIUM_BORDER = 2;
const LARGE_BORDER = 2;
const SMALL = 15;
const MEDIUM = 20;
const LARGE = 30;

export interface SpinnerProps {
  size?: "small" | "medium" | "large";
  spinerColor?: string;
  unit?: Unit;
}

const Spinner = ({ spinerColor = Colors.primary, size }: SpinnerProps) => {
  const { primary } = useTheme();
  const { unit } = useContext(UnitContext);
  const classes = useStyle();
  const borderStyle = spinerColor
    ? `${spinerColor} transparent transparent transparent`
    : `${primary} transparent transparent transparent`;

  const borderWidth =
    size === "small"
      ? SMALL_BORDER
      : size === "medium"
      ? MEDIUM_BORDER
      : size === "large"
      ? LARGE_BORDER
      : MEDIUM_BORDER;

  const width =
    size === "small"
      ? SMALL
      : size === "medium"
      ? MEDIUM
      : size === "large"
      ? LARGE
      : MEDIUM;

  const _width = unit === "viewport" ? `${pxToVh(width)}vh` : width;

  return (
    <div style={{ width: _width, height: _width }} className={classes.ldsRing}>
      <div
        style={{
          borderColor: borderStyle,
          borderWidth: borderWidth,
          width: _width,
          height: _width,
        }}
      />
      <div
        style={{
          borderColor: borderStyle,
          borderWidth: borderWidth,
          width: _width,
          height: _width,
        }}
      />
      <div
        style={{
          borderColor: borderStyle,
          borderWidth: borderWidth,
          width: _width,
          height: _width,
        }}
      />
      <div
        style={{
          borderColor: borderStyle,
          borderWidth: borderWidth,
          width: _width,
          height: _width,
        }}
      />
    </div>
  );
};

export { Spinner };
