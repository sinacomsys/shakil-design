import { Moment } from "moment-jalaali";
declare const WrapperTemplate: ({
  children,
  value,
  onFinalConfirm,
  disable,
}: {
  children: React.ReactNode;
  value?: Moment | null | undefined;
  onFinalConfirm?:
    | ((arg: { value: Moment | null | undefined }) => void)
    | undefined;
  disable: boolean;
}) => import("react/jsx-dev-runtime").JSX.Element;
export { WrapperTemplate };
