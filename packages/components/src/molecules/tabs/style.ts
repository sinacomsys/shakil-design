import { createUseStyles } from "react-jss";
import { theming } from "../../theme";
import { pxToVh } from "@shakil-design/utils";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      "no-content": {
        height: "100%",
      },
      tabs: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 20,
        overflow: "hidden",
      },
      tabsTitle: {
        width: 130,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      "tabs-nav-list": {
        display: "flex",
        height: `${pxToVh(42)}vh`,
        justifyContent: "space-between",
        columnGap: 4,
        backgroundColor: "white",
        overflowX: "auto",
        overflowY: "hidden",
        flex: 1,
        "&::-webkit-scrollbar": {
          height: 2,
        },
        /* Track */
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        /* Handle */
        "&::-webkit-scrollbar-thumb": {
          background: "#888",
        },
        /* Handle on hover */
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      },
      tab: {
        flexBasis: 200,
        flexGrow: 1,
        flexShrink: 0,
        height: "100%",
        color: theme.tab?.textColor,
        backgroundColor: theme.tab?.unSelectedTab,
        cursor: "pointer",
        borderRadius: 0,
        border: "none",
        position: "relative",
        textTransform: "uppercase",
        fontSize: 14,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "*": {
          cursor: "pointer",
        },
      },
      "tab-pane-close": {
        width: 16,
      },
      "active-tab-pane": {
        backgroundColor: theme.tab?.selectedTab,
      },
      "tab-pane-title": {
        width: "calc(100% - 16px)",
        padding: "0px 8px",
      },
      "tabs-content-holder": {
        overflow: "auto",
        backgroundColor: "white",
        width: "100%",
        position: "relative",
        flex: 1,
      },
      "tab-content": {
        height: "100%",
        "&--active": {
          display: "block",
        },
        "&--not-active": {
          display: "none",
        },
      },
      "tabs-nav-wrap": {
        display: "flex",
        overflow: "hidden",
        height: `${pxToVh(42)}vh`,
      },
    };
  },
  { theming, name: "tabs" },
);
