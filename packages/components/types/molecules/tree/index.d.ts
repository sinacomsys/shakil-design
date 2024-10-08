import { TreeBasicType, TreeProps } from "./types";
declare const TreeWrapper: <T extends TreeBasicType<T>>({
  unit,
  ...props
}: TreeProps<T>) => import("react/jsx-runtime").JSX.Element;
export { TreeWrapper as Tree };
