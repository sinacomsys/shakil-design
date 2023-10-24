declare const useStyle: (
  data?:
    | {
        theme?: import("../../../../theme").ColorsType | undefined;
      }
    | undefined,
) => import("jss").Classes<"month" | "nextMonth" | "prevMonth">;
export { useStyle };
