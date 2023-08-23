declare const useStyles: (data?: {
    theme?: import("../../theme/context").ColorsType | undefined;
} | undefined) => import("jss").Classes<"button" | "cover" | "ripple" | "@keyframes ripple" | "buttonMain" | "buttonSuccess" | "buttonDanger" | "ghostMain" | "ghostSuccess" | "ghostDanger" | "textContainer" | "loadingContainer">;
export { useStyles };
