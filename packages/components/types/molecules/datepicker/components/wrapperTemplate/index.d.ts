/// <reference types="react" />
import { DatePickerProviderProps } from "../types";
interface WrapperTemplateProps extends Pick<DatePickerProviderProps, "testid"> {
  children: React.ReactNode;
  onFinalConfirm?: () => void;
  disable: boolean;
  onGoToday: () => void;
}
declare const WrapperTemplate: ({
  children,
  onFinalConfirm,
  disable,
  onGoToday,
  testid,
}: WrapperTemplateProps) => import("react/jsx-dev-runtime").JSX.Element;
export { WrapperTemplate };
