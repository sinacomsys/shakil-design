import React from "react";
import { createUseStyles } from "react-jss";
import { ColorsType, theming } from "../../theme";

const addonStyle: React.CSSProperties = {
  position: "absolute",
  transform: "translateY(-50%)",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  insetBlockStart: "50%",
};

const textInputSharedStyle = (theme: ColorsType) => ({
  width: "100%",
  backgroundColor: theme.textInput?.fieldColor,
  color: theme.primary,
  border: "none",
  outline: "none",
  borderRadius: 7,
  paddingBlock: 8,
  paddingInline: 10,
  fontSize: 14,
});

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
        ...textInputSharedStyle(theme),
        height: 32,
      },
      "text-area": {
        ...textInputSharedStyle(theme),
      },
      "input-with-error": {
        border: `1px solid ${theme.textInput?.errorMessage}`,
      },
      disabled: {
        backgroundColor: theme.disableField,
        cursor: "not-allowed",
        color: theme.disableText,
      },
      inputWrapper: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
      },
      addonBefore: {
        ...addonStyle,
        insetInlineStart: 10,
      },
      addonAfter: {
        ...addonStyle,
        insetInlineEnd: 10,
      },
      "error-message": {
        position: "absolute",
        top: "100%",
        insetInlineStart: 0,
        insetBlockStart: "100%",
      },
    };
  },
  { theming, name: "text-input" },
);

export { useStyles };
