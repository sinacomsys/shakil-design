declare const useStyles: (
  data?:
    | {
        theme?: import("../../../../../theme/context").ColorsType | undefined;
      }
    | undefined,
) => import("jss").Classes<"no-data">;
export { useStyles };
