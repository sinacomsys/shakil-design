declare const useStyle: (data?: {
    theme?: Jss.Theme | undefined;
} | undefined) => import("jss").Classes<"month" | "nextMonth" | "prevMonth">;
export { useStyle };
