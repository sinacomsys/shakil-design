const createTreeFromFlatArray = <
  T extends { parentId?: string | null; id: string | undefined },
>(
  items: T[],
  parentId?: string,
): (T & { children: T[] })[] => {
  return (
    items
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
      }) || []
  );
};

export { createTreeFromFlatArray };
