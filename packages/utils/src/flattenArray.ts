const flatData = <T extends { children?: T[] }>(
  treeSources: T[]
): Omit<T, 'children'>[] => {
  return treeSources?.flatMap(({ children, ...rest }) => {
    if (children && children.length) {
      return [{ ...rest }, ...flatData(children)];
    }
    return rest;
  });
};

export { flatData };
