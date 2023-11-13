import { createUseStyles } from "react-jss";
import { theming } from "../../../theme";

export const useStyles = createUseStyles(
  ({ checkbox }) => {
    return {
      wrapper: {
        borderRadius: 3,
        position: "relative",
        backgroundColor: "transparent",
        width: 16,
        height: 16,
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
        width: 10,
        height: 10,
        backgroundColor: ({ checked }: { checked?: boolean }) => {
          return checked
            ? checkbox?.squareSelected
            : checkbox?.unselectedSquare;
        },
      },
    };
  },
  { theming, name: "custom-square" },
);
