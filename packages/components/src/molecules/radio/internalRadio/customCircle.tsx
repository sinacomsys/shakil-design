import { useWindowSize } from "usehooks-ts";
import { pxToVh } from "@shakil-design/utils";
import { Unit } from "../../../types";
import { useStyles } from "./style";
interface CustomCircle {
  borderColor: string | undefined;
  backgroundColor: string | undefined;
  unit?: Unit;
}

const CustomCircle = ({ borderColor, backgroundColor, unit }: CustomCircle) => {
  const classes = useStyles();
  const { height: windowHeight } = useWindowSize();
  const vh = windowHeight / 100;

  const outterCircleWidth =
    unit === "viewport" ? 2 * Math.round((pxToVh(16) * vh) / 2) : 16;
  const innerCircleWidth =
    unit === "viewport" ? 2 * Math.round((pxToVh(10) * vh) / 2) : 10;

  return (
    <div
      className={classes["outterCircle"]}
      style={{
        border: `1px solid ${borderColor}`,
        width: outterCircleWidth,
        height: outterCircleWidth,
      }}
    >
      <div
        className={classes["innerCircle"]}
        style={{
          backgroundColor: backgroundColor,
          width: innerCircleWidth,
          height: innerCircleWidth,
        }}
      />
    </div>
  );
};

export { CustomCircle };
