/// <reference types="react" />
import { TextInputProps } from "../../molecules";
interface NumberInput extends TextInputProps {
    onDecrease?: () => void;
    onIncrease?: () => void;
    wrapperStyle?: React.CSSProperties;
}
declare const NumberInput: ({ wrapperStyle, onDecrease, onIncrease, ...rest }: NumberInput) => import("react/jsx-dev-runtime").JSX.Element;
export { NumberInput };
