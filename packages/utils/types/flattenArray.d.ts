declare const flatData: <T extends {
    children?: T[] | undefined;
}>(treeSources: T[]) => Omit<T, "children">[];
export { flatData };
