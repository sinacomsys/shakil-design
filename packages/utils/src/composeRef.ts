function fillRef<T>(ref: React.Ref<T> | undefined, node: T) {
  if (typeof ref === "function") {
    ref(node);
  } else if (typeof ref === "object" && ref && "current" in ref) {
    (ref as any).current = node;
  }
}

/** Merge refs into one ref function to support ref passing. */
export function composeRef<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.Ref<T> {
  return (node: T) => {
    refs.forEach((ref) => {
      fillRef(ref, node);
    });
  };
}
