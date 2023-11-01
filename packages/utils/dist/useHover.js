import { useState } from "react";
import { useEventListener } from "usehooks-ts";
function useHover(elementRef) {
    var _a = useState(false), didHover = _a[0], setHover = _a[1];
    var handleMouseEnter = function () { return setHover(true); };
    var handleMouseLeave = function () { return setHover(false); };
    useEventListener("mouseenter", handleMouseEnter, elementRef);
    useEventListener("mouseleave", handleMouseLeave, elementRef);
    return didHover;
}
export { useHover };
//# sourceMappingURL=useHover.js.map