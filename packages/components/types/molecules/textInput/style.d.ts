import { ColorsType } from "../../theme";
declare const useStyles: (
  data?:
    | {
        theme?: ColorsType | undefined;
      }
    | undefined,
) => import("jss").Classes<
  | "disabled"
  | "addonBefore"
  | "clear-icon"
  | "textInput"
  | "text-area"
  | "input-with-error"
  | "inputWrapper"
  | "addonAfter"
  | "error-message"
  | "password-visible-icon"
>;
export { useStyles };
