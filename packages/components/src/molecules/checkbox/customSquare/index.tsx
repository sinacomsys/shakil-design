import classNames from "classnames";
import { useStyles } from "./style";
import { useRoundToNearestEven } from "@shakil-design/utils/src";
import { useContext } from "react";
import { UnitContext } from "../../../theme/context";
interface CustomRectangleProps {
  checked?: boolean;
}

const CustomSquare = ({ checked }: CustomRectangleProps) => {
  const classes = useStyles({ checked });
  const { unit } = useContext(UnitContext);
  const { roundToNearestEven } = useRoundToNearestEven(unit);

  return (
    <div
      style={{
        height: roundToNearestEven(16),
        width: roundToNearestEven(16),
        borderRadius: roundToNearestEven(2),
      }}
      className={classes["wrapper"]}
    >
      <div
        style={{
          height: roundToNearestEven(10),
          width: roundToNearestEven(10),
        }}
        className={classNames(
          classes["square"],
          checked && `${classes["square"]}--checked`,
          !checked && `${classes["square"]}--unchecked`,
        )}
      />
    </div>
  );
};

export { CustomSquare };
