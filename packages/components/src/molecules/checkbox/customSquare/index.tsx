import { useStyles } from "./style";
import { useRoundToNearestEven } from "@shakil-design/utils/src";
interface CustomRectangleProps {
  checked?: boolean;
}

const CustomSquare = ({ checked }: CustomRectangleProps) => {
  const classes = useStyles({ checked });

  const { roundToNearestEven } = useRoundToNearestEven();

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
        className={classes["square"]}
      />
    </div>
  );
};

export { CustomSquare };
