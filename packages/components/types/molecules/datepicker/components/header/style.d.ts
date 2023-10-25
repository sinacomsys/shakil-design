declare const useStyle: (data?: {
    theme?: import("../../../../theme/context").ColorsType | undefined;
} | undefined) => import("jss").Classes<"month" | "nextMonth" | "prevMonth">;
export { useStyle };
