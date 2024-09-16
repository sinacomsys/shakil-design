import { useStyles } from "./style";

const EndOfList = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();

  return (
    <tr>
      <td colSpan={6}>
        <div className={classes["wrapper"]}>{children}</div>
      </td>
    </tr>
  );
};

export { EndOfList };
