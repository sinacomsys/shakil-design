import React from "react";
import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

const button: React.CSSProperties = {
  overflow: "hidden",
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  borderRadius: 7,
  border: "none",
  outline: "none",
  position: "relative",
  paddingInline: 11,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const useStyles = createUseStyles(
  (theme) => {
    return {
      "@keyframes ripple": {
        to: {
          opacity: 0,
          transform: "scale(2)",
        },
      },
      button: button,
      buttonMain: {
        ...button,
        backgroundColor: theme.button?.main as string,
        color: "white" as string,
      },
      buttonSuccess: {
        ...button,
        backgroundColor: theme.button?.success as string,
        color: "white",
      },
      buttonDanger: {
        ...button,
        backgroundColor: theme.button?.danger as string,
        color: "white",
      },
      ghostMain: {
        ...button,
        border: `2px solid ${theme.button?.main}`,
        color: theme.button?.main,
        backgroundColor: "white",
      },
      ghostSuccess: {
        ...button,
        border: `2px solid ${theme.button?.success}`,
        color: theme.button?.success,
        backgroundColor: "white",
      },
      ghostDanger: {
        ...button,
        border: `2px solid ${theme.button?.danger}`,
        color: theme.button?.danger,
        backgroundColor: "white",
      },
      cover: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: theme.color_white as string,
        top: 0,
        left: 0,
        opacity: 0.3,
        cursor: "notAllowd",
      },
      ripple: {
        transform: "scale(0)",
        borderRadius: "100%",
        position: "absolute",
        opacity: 0.4,
        backgroundColor: theme.color_white,
        animation: "$ripple 750ms",
      },
      textContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      loadingContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      },
    };
  },
  { theming, name: "button" },
);

export { useStyles };
