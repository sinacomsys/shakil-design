export const findGrandParents = <
  T extends { id: string; parentId?: string | null }
>(
  id?: string | number | null,
  treeSources?: T[]
): T[] => {
  const finded: T | undefined = treeSources?.find((item: T) => item.id === id);
  if (finded) {
    return [finded, ...findGrandParents<T>(finded?.parentId, treeSources)];
  }
  return [];
};
