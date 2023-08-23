import { CollapseProps, TreeBasicType } from "../types";
declare const Collapse: <T extends TreeBasicType<T>>({
  title,
  children,
  level,
  data,
  onLoadData,
  onClick,
  activeItemId,
  id,
  defaultOpen,
}: CollapseProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { Collapse };
