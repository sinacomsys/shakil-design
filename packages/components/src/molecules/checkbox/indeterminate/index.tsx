import { useContext } from "react";
import { UnitContext } from "../../../theme/context";
import { useStyles } from "./style";
import { useRoundToNearestEven } from "@shakil-design/utils/src";

const Indeterminate = () => {
  const classes = useStyles();
  const { unit } = useContext(UnitContext);
  const { roundToNearestEven } = useRoundToNearestEven(unit);

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
