declare const useStyle: (data?: {
    theme?: import("../../../theme/context").ColorsType | undefined;
} | undefined) => import("jss").Classes<"content" | "wrapper" | "dotLine" | "statusLine" | "arrowDown" | "arrowUp">;
export { useStyle };
