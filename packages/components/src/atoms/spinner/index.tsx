import { pxToVh } from "@shakil-design/utils";
import { useTheme, Colors } from "../../theme/context";
import { useStyle } from "./style";

const SMALL_BORDER = 1;
const MEDIUM_BORDER = 2;
const LARGE_BORDER = 2;
const SMALL = 15;
const MEDIUM = 20;
const LARGE = 30;

const Spinner = ({
  spinerColor = Colors.color_primary_1,
  size,
}: {
  size?: "small" | "medium" | "large";
  spinerColor?: string;
}) => {
  const { color_primary_1 } = useTheme();
  const classes = useStyle();
  const borderStyle = spinerColor
    ? `${spinerColor} transparent transparent transparent`
    : `${color_primary_1} transparent transparent transparent`;

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

  const _width = `${pxToVh(width)}vh`;

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
