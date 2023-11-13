import { pxToVhString, pxToVwString } from "@shakil-design/utils";
import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

const useStyles = createUseStyles(
  ({ table }) => {
    return {
      checkbox: {
        width: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 24,
        borderRight: `1px solid ${table?.divider}`,
      },
      "clear-filter": {
        height: 24,
        width: 30,
        borderRight: `1px solid ${table?.divider}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&--wrapper": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
