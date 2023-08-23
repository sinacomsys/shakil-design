import { useWindowSize } from "usehooks-ts";
import { pxToVh } from "@shakil-design/utils";
import { Unit } from "../../../types";
import { WIDTH } from "../customSquare";
import { useStyles } from "./style";

const indeterminate = 6;

interface IndeterminateProps {
  unit: Unit;
}

const Indeterminate = ({ unit }: IndeterminateProps) => {
  const classes = useStyles();

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
      className={classes["wrapper"]}
      style={{
        width: width,
        height: width,
      }}
    >
      <div
        className={classes["square"]}
        style={{
          width: smallSquareWidth,
          height: smallSquareWidth,
        }}
      />
    </div>
  );
};

export { Indeterminate };
