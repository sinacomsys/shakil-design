import { pxToVh } from "./convertUnit";
import { useWindowSize } from "./useWindowSize";

export function useRoundToNearestEven() {
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

    return round(vh * pxToVh(value));
  }

  return {
    roundToNearestEven,
  };
}
