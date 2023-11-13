import { useStyles } from "./style";
export interface CustomCircleProps {
  borderColor: string | undefined;
  backgroundColor: string | undefined;
}

const CustomCircle = ({ borderColor, backgroundColor }: CustomCircleProps) => {
  const classes = useStyles({ backgroundColor, borderColor });
  return (
    <div className={classes["outter-circle"]}>
      <div className={classes["inner-circle"]} />
    </div>
  );
};

export { CustomCircle };
