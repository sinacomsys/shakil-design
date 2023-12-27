import { CustomCircleProps } from "./customCircle";
export declare const useStyles: (
  data?:
    | (CustomCircleProps & {
        theme?: import("../../../theme/context").ColorsType | undefined;
      })
    | undefined,
) => import("jss").Classes<
  "input" | "container" | "label" | "ripple" | "outter-circle" | "inner-circle"
>;
