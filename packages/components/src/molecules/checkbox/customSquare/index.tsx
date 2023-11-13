import { useStyles } from "./style";
interface CustomRectangleProps {
  checked?: boolean;
}

const CustomSquare = ({ checked }: CustomRectangleProps) => {
  const classes = useStyles({ checked });

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["square"]} />
    </div>
  );
};

export { CustomSquare };
