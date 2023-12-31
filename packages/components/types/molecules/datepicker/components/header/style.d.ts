declare const useStyle: (
  data?:
    | {
        theme?: import("../../../../theme/context").ColorsType | undefined;
      }
    | undefined,
) => import("jss").Classes<
  "wrapper" | "month" | "year" | "nextMonth" | "prevMonth" | "change-year"
>;
export { useStyle };
