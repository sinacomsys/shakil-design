import { Unit } from "../../../types";
export declare const WIDTH = 16;
interface CustomRectangleProps {
    mode?: "dark" | "light";
    checked?: boolean;
    unit?: Unit;
}
declare const CustomRectangle: ({ mode, checked, unit }: CustomRectangleProps) => import("react/jsx-dev-runtime").JSX.Element;
export { CustomRectangle };
