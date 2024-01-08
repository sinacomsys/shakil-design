import { useStyles } from "./style";
import { Text } from "../../../../../atoms";
import { theming } from "../../../../../theme";
const { useTheme } = theming;

const NoData = () => {
  const classes = useStyles();
  const { primary } = useTheme();
  return (
    <div className={classes["no-data"]}>
      <Text color={primary}>No Data!</Text>
    </div>
  );
};

export { NoData };
