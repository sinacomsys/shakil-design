type Unit = "pixel" | "viewport";
export declare function useRoundToNearestEven(unit: Unit | undefined): {
  roundToNearestEven: (value: number) => number;
};
export {};
