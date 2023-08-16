import { TreeBasicType, TreeProps } from "./types";
declare const Tree: <T extends TreeBasicType<T>>({ data, onSelectItem, onLoadData, activeItemId, defaultSeletedItem, }: TreeProps<T>) => import("react/jsx-dev-runtime").JSX.Element;
export { Tree };
