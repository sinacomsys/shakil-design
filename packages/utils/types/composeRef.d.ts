/// <reference types="react" />
/** Merge refs into one ref function to support ref passing. */
export declare function composeRef<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.Ref<T>;
