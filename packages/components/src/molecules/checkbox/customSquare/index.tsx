import { useWindowSize } from "usehooks-ts";
import { useTheme } from "../../../theme";
import { pxToVh } from "@shakil-design/utils";
import { Unit } from "../../../types";
import { useStyles } from "./style";

export const WIDTH = 16;
const INNER_WIDTH = 10;
interface CustomRectangleProps {
  checked?: boolean;
  unit?: Unit;
}

const CustomSquare = ({ checked, unit }: CustomRectangleProps) => {
  const {
    checkbox: {
      borderSelected,
      // deactive,
      squareSelected,
      unselectedBorder,
      unselectedSquare,
    } = {},
  } = useTheme();
  const classes = useStyles();
  const { height: windowHeight } = useWindowSize();
  const vh = windowHeight / 100;
  const borderColor = checked ? borderSelected : unselectedBorder;
  const backgroundColor = checked ? squareSelected : unselectedSquare;

  const width =
    unit === "pixel" ? WIDTH : 2 * Math.round((pxToVh(WIDTH) * vh) / 2);

  const innderWidth =
    unit === "pixel"
      ? INNER_WIDTH
      : 2 * Math.round((pxToVh(INNER_WIDTH) * vh) / 2);

  return (
    <div
      className={classes["wrapper"]}
      style={{
        width: width,
        height: width,
        border: `1px solid ${borderColor}`,
      }}
    >
      <div
        className={classes["square"]}
        style={{
          width: innderWidth,
          height: innderWidth,
          backgroundColor: backgroundColor,
        }}
      />
    </div>
  );
};

export { CustomSquare };
