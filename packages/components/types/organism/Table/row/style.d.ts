interface StyleProps {
    isChecked: boolean;
    isSelected: boolean;
    isHoverd: boolean;
    isOnCheckedRowsAvailable: boolean;
}
export declare const useStyles: (data?: (StyleProps & {
    theme?: import("../../../theme/context").ColorsType | undefined;
}) | undefined) => import("jss").Classes<"row">;
export {};
