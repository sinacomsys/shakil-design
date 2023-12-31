declare const WrapperTemplate: ({
  children,
  onFinalConfirm,
  disable,
  onGoToday,
}: {
  children: React.ReactNode;
  onFinalConfirm?: (() => void) | undefined;
  disable: boolean;
  onGoToday: () => void;
}) => import("react/jsx-dev-runtime").JSX.Element;
export { WrapperTemplate };
