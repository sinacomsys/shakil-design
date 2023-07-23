import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

const commonStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5625rem 0.6875rem",
  borderRadius: "0.4375rem",
  color: "white",
  fontSize: "1rem",
  lineHeight: "1.0625rem",
  marginBottom: "0.625rem",
  border: "none",
  cursor: "pointer",
};

export const useStyles = createUseStyles(
  (theme) => {
    return {
      lomNodeButton: {
        ...commonStyle,
        backgroundColor: theme.color_primary_2,
      },
      lomNodeButtonSelected: {
        ...commonStyle,
        backgroundColor: theme.color_secondary_1,
        "&::hover": {
          backgroundColor: theme.color_secondary_2,
        },
      },
    };
  },
  { theming },
);
