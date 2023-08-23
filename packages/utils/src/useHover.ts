import { RefObject, useState } from "react";

import { useEventListener } from "usehooks-ts";

function useHover<T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>,
): boolean {
  const [didHover, setHover] = useState<boolean>(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  useEventListener("mouseenter", handleMouseEnter, elementRef);
  useEventListener("mouseleave", handleMouseLeave, elementRef);

  return didHover;
}

export { useHover };
