export declare const useStyles: (
  data?:
    | ({
        isActive: boolean;
      } & {
        theme?: import("../../../../theme/context").ColorsType | undefined;
      })
    | undefined,
) => import("jss").Classes<"title-wrapper" | "default-title">;
