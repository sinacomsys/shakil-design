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
  color: theme.primary,
  border: "none",
  outline: "none",
  paddingBlock: 8,
  paddingInline: 10,
  fontSize: 14,
  backgroundColor: theme.textInput?.fieldColor,
  borderRadius: 7,
});

const useStyles = createUseStyles(
  (theme) => {
    return {
      "clear-icon": {
        cursor: "pointer",
      },
      textInput: {
        ...textInputSharedStyle(theme),
        height: 32,
        "&--input-with-addon-after": {
          paddingInlineEnd: 25,
        },
        "&--input-with-addon-before": {
          paddingInlineStart: 40,
        },
      },
      "text-area": {
        ...textInputSharedStyle(theme),
      },
      "input-with-error": {
        boxShadow: `0px 0px 0px 2px ${theme.textInput?.errorMessage}`,
      },
      disabled: {
        backgroundColor: theme.disableField,
        cursor: "not-allowed !important",
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
        insetBlockStart: "104%",
      },
      "password-visible-icon": {
        cursor: "pointer",
      },
    };
  },
  { theming, name: "text-input" },
);

export { useStyles };
