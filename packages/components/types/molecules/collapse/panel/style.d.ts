declare const useStyles: (
  data?:
    | {
        theme?: import("../../../theme").ColorsType | undefined;
      }
    | undefined,
) => import("jss").Classes<"title" | "titleWrapper">;
export { useStyles };
