import { useStyles } from "./style";

const EndOfList = ({
  children,
  numberOfColumns,
}: {
  children: React.ReactNode;
  numberOfColumns: number;
}) => {
  const classes = useStyles();

  return (
    <tr>
      <td colSpan={numberOfColumns + 1}>
        <div className={classes["wrapper"]}>{children}</div>
      </td>
    </tr>
  );
};

export { EndOfList };
