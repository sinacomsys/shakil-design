declare const useStyles: (data?: {
    theme?: import("../../theme/context").ColorsType | undefined;
} | undefined) => import("jss").Classes<"button" | "cover" | "@keyframes ripple" | "buttonPrimary" | "buttonSecondary" | "ripple">;
export { useStyles };
