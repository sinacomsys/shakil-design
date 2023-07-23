import { useWindowSize } from "usehooks-ts";
import { pxToVh } from "@sina-base/utils";
import { useStyles } from "./style";
const CustomCircle = ({
  borderColor,
  backgroundColor,
}: {
  borderColor: string | undefined;
  backgroundColor: string | undefined;
}) => {
  const classes = useStyles();
  const { height: windowHeight } = useWindowSize();
  const vh = windowHeight / 100;
  return (
    <div
      className={classes["outterCircle"]}
      style={{
        border: `1px solid ${borderColor}`,
        width: 2 * Math.round((pxToVh(20) * vh) / 2),
        height: 2 * Math.round((pxToVh(20) * vh) / 2),
      }}
    >
      <div
        className={classes["innerCircle"]}
        style={{
          backgroundColor: backgroundColor,
          width: 2 * Math.round((pxToVh(14) * vh) / 2),
          height: 2 * Math.round((pxToVh(14) * vh) / 2),
        }}
      />
    </div>
  );
};

export { CustomCircle };
