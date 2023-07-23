import { createUseStyles } from "react-jss";
import { theming } from "../../theme";
import { pxToVh } from "@sina-base/utils";

export const useStyles = createUseStyles(
  (theme) => {
    return {
      tabs: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
      },
      tabsTitle: {
        width: 131,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      tabsList: {
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
        color: theme.color_primary_2,
        backgroundColor: theme.color_primary_6,
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
      tabActive: {
        backgroundColor: theme.color_primary_1,
      },
      tabsTitleWrapper: {
        width: "calc(100% - 16px)",
        padding: "0px 8px",
      },
      tabsContentContainer: {
        overflow: "auto",
        backgroundColor: "white",
        borderBottomLeftRadius: "1.25rem",
        borderBottomRightRadius: "1.25rem",
        width: "100%",
        position: "relative",
        flex: 1,
      },
      tabsContainer: {
        display: "flex",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden",
        height: `${pxToVh(42)}vh`,
      },
    };
  },
  { theming },
);
