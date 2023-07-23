export declare const findGrandParents: <T extends {
    id: string;
    parentId?: string | null | undefined;
}>(id?: string | number | null, treeSources?: T[] | undefined) => T[];
