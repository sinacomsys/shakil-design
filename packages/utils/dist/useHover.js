"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHover = void 0;
var react_1 = require("react");
var usehooks_ts_1 = require("usehooks-ts");
function useHover(elementRef) {
    var _a = (0, react_1.useState)(false), didHover = _a[0], setHover = _a[1];
    var handleMouseEnter = function () { return setHover(true); };
    var handleMouseLeave = function () { return setHover(false); };
    (0, usehooks_ts_1.useEventListener)("mouseenter", handleMouseEnter, elementRef);
    (0, usehooks_ts_1.useEventListener)("mouseleave", handleMouseLeave, elementRef);
    return didHover;
}
exports.useHover = useHover;
//# sourceMappingURL=useHover.js.map