export const isNullish = <T>(value: T) => {
  return (value ?? undefined) === undefined;
};
