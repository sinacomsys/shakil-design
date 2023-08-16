import { useWindowSize } from "usehooks-ts";
import { pxToVh } from "@shakil-design/utils";
import { Unit } from "../../../types";
import { useStyles } from "./style";
interface CustomCircle {
  borderColor: string | undefined;
  backgroundColor: string | undefined;
  unit?: Unit;
}

const CustomCircle = ({ borderColor, backgroundColor }: CustomCircle) => {
  const classes = useStyles();
  const { height: windowHeight } = useWindowSize();
  const vh = windowHeight / 100;
  return (
    <div
      className={classes["outterCircle"]}
      style={{
        border: `1px solid ${borderColor}`,
        width: 2 * Math.round((pxToVh(16) * vh) / 2),
        height: 2 * Math.round((pxToVh(16) * vh) / 2),
      }}
    >
      <div
        className={classes["innerCircle"]}
        style={{
          backgroundColor: backgroundColor,
          width: 2 * Math.round((pxToVh(10) * vh) / 2),
          height: 2 * Math.round((pxToVh(10) * vh) / 2),
        }}
      />
    </div>
  );
};

export { CustomCircle };
