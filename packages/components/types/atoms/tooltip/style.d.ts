declare const useStyles: (
  data?:
    | {
        theme?: import("../../theme").ColorsType | undefined;
      }
    | undefined,
) => import("jss").Classes<"mask" | "arrow" | "maskVisible">;
export { useStyles };
