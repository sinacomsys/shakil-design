declare const useStyles: (
  data?:
    | {
        theme?: import("../../theme").ColorsType | undefined;
      }
    | undefined,
) => import("jss").Classes<"checkBoxWrapper" | "hiddenInput">;
export { useStyles };
