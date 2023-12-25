import { ColorsType } from "../../theme";
declare const useStyles: (
  data?:
    | {
        theme?: ColorsType | undefined;
      }
    | undefined,
) => import("jss").Classes<
  | "disabled"
  | "clear-icon"
  | "textInput"
  | "text-area"
  | "input-with-error"
  | "inputWrapper"
  | "addonBefore"
  | "addonAfter"
  | "error-message"
  | "input-with-addon-after"
>;
export { useStyles };
