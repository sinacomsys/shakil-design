declare const useStyle: (
  data?:
    | {
        theme?: import("../../../theme").ColorsType | undefined;
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
