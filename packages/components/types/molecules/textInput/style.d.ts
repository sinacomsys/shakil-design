declare const useStyles: (data?: {
    theme?: import("../../theme/context").ColorsType | undefined;
} | undefined) => import("jss").Classes<"disabled" | "textInput" | "inputWrapper" | "addonBefore" | "addonAfter">;
export { useStyles };
