export const findGrandParents = (id, treeSources) => {
    const finded = treeSources?.find((item) => item.id === id);
    if (finded) {
        return [finded, ...findGrandParents(finded?.parentId, treeSources)];
    }
    return [];
};
//# sourceMappingURL=findGrandParents.js.map