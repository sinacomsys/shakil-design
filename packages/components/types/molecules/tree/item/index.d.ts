import React from "react";
import { ItemProps, TreeBasicType } from "../types";
declare const RefWrapper: <T extends TreeBasicType<T>>(p: ItemProps<T> & {
    ref?: React.Ref<HTMLDivElement> | undefined;
}) => React.ReactElement;
export { RefWrapper as Item };
