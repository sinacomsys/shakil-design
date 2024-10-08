/// <reference types="react" />
import { TextInputProps } from "../../molecules";
interface NumberInput extends TextInputProps {
  onDecrease?: () => void;
  onIncrease?: () => void;
  wrapperStyle?: React.CSSProperties;
  wrapperClassName?: string;
}
declare const NumberInput: ({
  wrapperStyle,
  onDecrease,
  onIncrease,
  wrapperClassName,
  ...rest
}: NumberInput) => import("react/jsx-runtime").JSX.Element;
export { NumberInput };
