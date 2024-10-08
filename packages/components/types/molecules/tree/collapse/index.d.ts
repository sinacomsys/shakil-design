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
  index,
}: CollapseProps<T>) => import("react/jsx-runtime").JSX.Element;
export { Collapse };
