import { useState } from "react";
import { useEventListener } from "usehooks-ts";
function useHover(elementRef) {
    const [didHover, setHover] = useState(false);
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    useEventListener("mouseenter", handleMouseEnter, elementRef);
    useEventListener("mouseleave", handleMouseLeave, elementRef);
    return didHover;
}
export { useHover };
//# sourceMappingURL=useHover.js.map