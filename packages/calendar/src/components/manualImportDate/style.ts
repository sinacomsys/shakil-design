import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  () => {
    return {
      wrapper: {
        display: "flex",
        alignItems: "center",
        marginBottom: 8,
      },
      title: {
        marginInlineEnd: 12,
      },
      input: {
        width: 44,
      },
      minute: {
        marginInline: 6,
      },
    };
  },
  {
    name: "manual-import-date",
  },
);

export { useStyles };
