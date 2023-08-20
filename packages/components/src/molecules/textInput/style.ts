import React from "react";
import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

const addonStyle: React.CSSProperties = {
  position: "absolute",
  transform: "translateY(-50%)",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  insetBlockStart: "50%",
};

const useStyles = createUseStyles(
  (theme) => {
    return {
      textInput: {
        width: "100%",
        backgroundColor: theme.textInput?.fieldColor,
        color: theme.color_primary_1,
        border: "none",
        outline: "none",
      },
      disabled: {
        backgroundColor: theme.color_background,
        cursor: "not-allowed",
        color: theme.color_gray_4,
      },
      inputWrapper: {
        position: "relative",
      },
      addonBefore: {
        ...addonStyle,
        insetInlineStart: 10,
      },
      addonAfter: {
        ...addonStyle,
        insetInlineEnd: 10,
      },
    };
  },
  { theming },
);

export { useStyles };
