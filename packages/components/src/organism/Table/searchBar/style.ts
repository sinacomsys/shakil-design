import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

const useStyles = createUseStyles(
  ({ table }) => {
    return {
      checkbox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 24,
        borderRight: `1px solid ${table?.divider}`,
        paddingInline: 8,
      },
      "clear-filter": {
        paddingInline: 8,
        height: 24,
        borderRight: `1px solid ${table?.divider}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&--wrapper": {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        },
      },
      wrapper: {
        display: ({ isSearchVisible }: { isSearchVisible: boolean }) => {
          return isSearchVisible ? "table-row" : "none";
        },
        height: 45,
        backgroundColor: table?.filtersTab,
      },
    };
  },
  { name: "search-bar", theming },
);

export { useStyles };
