import { ItemProps, TreeBasicType } from "../../types";
declare const DefaultNode: <T extends TreeBasicType<T>>({
  data,
  isLoading,
  level,
  arrowDirection,
  fontSize,
  isActive,
  title,
}: ItemProps<T>) => import("react/jsx-runtime").JSX.Element;
export { DefaultNode };
