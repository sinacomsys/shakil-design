import { pxToVh } from "./convertUnit";
import { useWindowSize } from "./useWindowSize";
type Unit = "pixel" | "viewport";

export function useRoundToNearestEven(unit: Unit | undefined) {
  const { height } = useWindowSize();
  const round = (number: number) => {
    const rounded = Math.ceil(number);
    const isRoundedOdd = rounded % 2 !== 0;
    if (isRoundedOdd) {
      return rounded + 1;
    } else return rounded;
  };
  function roundToNearestEven(value: number) {
    const vh = height / 100;
    const _value = unit === "viewport" ? vh * pxToVh(value) : value;
    return round(_value);
  }

  return {
    roundToNearestEven,
  };
}
