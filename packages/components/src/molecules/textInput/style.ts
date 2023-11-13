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
      "clear--visible": {
        cursor: "pointer",
        visibility: "visible",
      },
      "clear--hidden": {
        cursor: "pointer",
        visibility: "hidden",
      },
      textInput: {
        width: "100%",
        backgroundColor: theme.textInput?.fieldColor,
        color: theme.primary,
        border: "none",
        outline: "none",
        height: 32,
        borderRadius: 7,
        paddingBlock: 8,
        paddingInline: 10,
        fontSize: 14,
      },
      disabled: {
        backgroundColor: theme.disableField,
        cursor: "not-allowed",
        color: theme.disableText,
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
  { theming, name: "text-input" },
);

export { useStyles };
