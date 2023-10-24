declare const useStyles: (
  data?:
    | {
        theme?: import("../../theme").ColorsType | undefined;
      }
    | undefined,
) => import("jss").Classes<"mask" | "modalContainer" | "centerd">;
export { useStyles };
