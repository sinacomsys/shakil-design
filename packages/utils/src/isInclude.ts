export const isInclude = (a?: string, b?: string) => {
  return a?.toLowerCase().includes((b || "")?.toLowerCase() || "");
};
