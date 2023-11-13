import { useStyles } from "./style";

const Indeterminate = () => {
  const classes = useStyles();

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["square"]} />
    </div>
  );
};

export { Indeterminate };
