import { ColorsType } from "../../theme";
declare const useStyles: (
  data?:
    | {
        theme?: ColorsType | undefined;
      }
    | undefined,
) => import("jss").Classes<
  | "disabled"
  | "clear--visible"
  | "clear--hidden"
  | "textInput"
  | "text-area"
  | "input-with-error"
  | "inputWrapper"
  | "addonBefore"
  | "addonAfter"
  | "error-message"
>;
export { useStyles };
