import { Unit } from "../../types";
export interface SpinnerProps {
    size?: "small" | "medium" | "large";
    spinerColor?: string;
    unit?: Unit;
}
declare const Spinner: ({ spinerColor, size, unit, }: SpinnerProps) => import("react/jsx-dev-runtime").JSX.Element;
export { Spinner };
