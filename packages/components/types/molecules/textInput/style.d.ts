declare const useStyles: (
  data?:
    | {
        theme?: import("../../theme").ColorsType | undefined;
      }
    | undefined,
) => import("jss").Classes<
  "disabled" | "textInput" | "inputWrapper" | "addonBefore" | "addonAfter"
>;
export { useStyles };
