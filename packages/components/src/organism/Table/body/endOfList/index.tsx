import { useStyles } from "./style";

const EndOfList = ({
  children,
  numberOfColumns,
  transformY,
}: {
  children: React.ReactNode;
  numberOfColumns: number;
  transformY?: number;
}) => {
  const classes = useStyles();

  return (
    <tr
      style={{
        transform: `translateY(${transformY}px)`,
      }}
    >
      <td colSpan={numberOfColumns + 1}>
        <div className={classes["wrapper"]}>{children}</div>
      </td>
    </tr>
  );
};

export { EndOfList };
