import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  ({ checkbox }) => {
    return {
      wrapper: {
        position: "relative",
        backgroundColor: "transparent",
        border: ({ checked }: { checked?: boolean }) => {
          const borderColor = checked
            ? checkbox?.borderSelected
            : checkbox?.unselectedBorder;
          return `1px solid ${borderColor}`;
        },
      },
      square: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "&--checked": {
          backgroundColor: checkbox?.squareSelected,
        },
        "&--unchecked": {
          backgroundColor: checkbox?.unselectedSquare,
        },
      },
    };
  },
  { theming, name: "custom-square" },
);
