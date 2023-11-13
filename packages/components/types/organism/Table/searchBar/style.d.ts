declare const useStyles: (data?: ({
    isSearchVisible: boolean;
} & {
    theme?: import("../../../theme/context").ColorsType | undefined;
}) | undefined) => import("jss").Classes<"checkbox" | "wrapper" | "clear-filter">;
export { useStyles };
