import { createUseStyles } from "react-jss";
import { theming } from "../../../../theme";

export const useStyles = createUseStyles(
  ({ tab }) => {
    return {
      "title-wrapper": {
        cursor: "pointer",
        backgroundColor: ({ isActive }: { isActive: boolean }) => {
          return isActive ? tab?.card.activeBG : tab?.card.BG;
        },
        display: "flex",
        alignItems: "center",
        paddingInlineStart: 6,
        paddingInlineEnd: 18,
        paddingBlock: 6,
        marginInlineEnd: 4,
      },
      "default-title": {
        flex: 1,
        display: "flex",
        alignItems: "center",
        position: "relative",
        minWidth: 135,
        maxWidth: 150,
        paddingInlineEnd: 8,
      },
    };
  },

  { theming, name: "card" },
);
