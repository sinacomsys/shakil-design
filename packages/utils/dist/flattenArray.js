const flatData = (treeSources) => {
    return treeSources?.flatMap(({ children, ...rest }) => {
        if (children && children.length) {
            return [{ ...rest }, ...flatData(children)];
        }
        return rest;
    });
};
export { flatData };
//# sourceMappingURL=flattenArray.js.map