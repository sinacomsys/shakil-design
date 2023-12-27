import { useStyles } from "./style";
import { useRoundToNearestEven } from "@shakil-design/utils/src";

const Indeterminate = () => {
  const classes = useStyles();

  const { roundToNearestEven } = useRoundToNearestEven();

  return (
    <div
      style={{ height: roundToNearestEven(16), width: roundToNearestEven(16) }}
      className={classes["wrapper"]}
    >
      <div
        style={{
          height: roundToNearestEven(6),
          width: roundToNearestEven(6),
        }}
        className={classes["square"]}
      />
    </div>
  );
};

export { Indeterminate };
