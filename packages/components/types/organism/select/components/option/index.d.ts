/// <reference types="react" />
export interface OptionProps {
  isSelected: boolean;
  children: React.ReactNode;
  onClick: () => void;
  multiple: boolean;
}
declare const Option: ({
  children,
  onClick,
  isSelected,
  multiple,
}: OptionProps) => import("react/jsx-runtime").JSX.Element;
export { Option };
