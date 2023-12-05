import { useStyles } from "./style";
import { useRoundToNearestEven } from "@shakil-design/utils";
export interface CustomCircleProps {
  borderColor: string | undefined;
  backgroundColor: string | undefined;
}

const CustomCircle = ({ borderColor, backgroundColor }: CustomCircleProps) => {
  const classes = useStyles({ backgroundColor, borderColor });
  const { roundToNearestEven } = useRoundToNearestEven();
  return (
    <div
      style={{ width: roundToNearestEven(16), height: roundToNearestEven(16) }}
      className={classes["outter-circle"]}
    >
      <div
        style={{
          width: roundToNearestEven(10),
          height: roundToNearestEven(10),
        }}
        className={classes["inner-circle"]}
      />
    </div>
  );
};

export { CustomCircle };
