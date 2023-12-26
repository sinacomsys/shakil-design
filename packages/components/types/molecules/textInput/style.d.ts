import { ColorsType } from "../../theme";
declare const useStyles: (
  data?:
    | {
        theme?: ColorsType | undefined;
      }
    | undefined,
) => import("jss").Classes<
  | "disabled"
  | "text-input"
  | "clear-icon"
  | "text-area"
  | "input-with-error"
  | "input-wrapper"
  | "addonBefore"
  | "addonAfter"
  | "error-message"
>;
export { useStyles };
