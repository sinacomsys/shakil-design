const createTreeFromFlatArray = (items, parentId) => {
    return (items
        ?.filter((item) => {
        return parentId === undefined
            ? !item.parentId
            : item.parentId == parentId;
    })
        .map((item) => {
        return {
            ...item,
            children: createTreeFromFlatArray(items, item.id),
        };
    }) || []);
};
export { createTreeFromFlatArray };
//# sourceMappingURL=createTreeFromFlatArray.js.map