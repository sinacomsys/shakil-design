declare const createTreeFromFlatArray: <T extends {
    parentId?: string | null | undefined;
    id: string | undefined;
}>(items: T[], parentId?: string) => (T & {
    children: T[];
})[];
export { createTreeFromFlatArray };
