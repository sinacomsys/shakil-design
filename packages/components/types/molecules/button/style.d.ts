declare const useStyles: (data?: {
    theme?: import("../../theme/context").ColorsType | undefined;
} | undefined) => import("jss").Classes<"button" | "cover" | "ripple" | "@keyframes ripple" | "buttonPrimary" | "buttonSecondary" | "textContainer" | "loadingContainer">;
export { useStyles };
