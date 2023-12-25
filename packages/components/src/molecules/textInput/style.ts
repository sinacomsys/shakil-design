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
  backgroundColor: "transparent",
  color: theme.primary,
  border: "none",
  outline: "none",
  fontSize: 14,
  padding: 0,
});

const useStyles = createUseStyles(
  (theme) => {
    return {
      "clear-icon": {
        cursor: "pointer",
      },
      "text-input": {
        ...textInputSharedStyle(theme),
        height: "100%",
      },
      "text-area": {
        ...textInputSharedStyle(theme),
        backgroundColor: theme.textInput?.fieldColor,
        borderRadius: 7,
      },
      "input-with-error": {
        border: `1px solid ${theme.textInput?.errorMessage}`,
      },
      disabled: {
        backgroundColor: theme.disableField,
        cursor: "not-allowed",
        color: theme.disableText,
      },
      "input-wrapper": {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.textInput?.fieldColor,
        borderRadius: 7,
        height: 32,
        paddingBlock: 8,
        paddingInline: 10,
        overflow: "hidden",
        "&--input-with-addon-after": {
          paddingInlineEnd: 24,
        },
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
