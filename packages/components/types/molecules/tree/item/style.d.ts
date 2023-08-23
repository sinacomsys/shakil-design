declare const useStyle: (
  data?:
    | {
        theme?: import("../../../theme/context").ColorsType | undefined;
      }
    | undefined,
) => import("jss").Classes<
  | "content"
  | "dotLine"
  | "wrapper"
  | "statusLine"
  | "arrowDown"
  | "arrowUp"
  | "spinnerWrapper"
>;
export { useStyle };
