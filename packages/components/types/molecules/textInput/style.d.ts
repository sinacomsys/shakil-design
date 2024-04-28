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
  | "password-visible-icon"
>;
export { useStyles };
