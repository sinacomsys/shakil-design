"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHorizontalScroll = void 0;
var react_1 = require("react");
function useHorizontalScroll() {
    var elRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var el = elRef.current;
        if (!el)
            return;
        var onWheel = function (e) {
            if (e.deltaY == 0)
                return;
            e.preventDefault();
            el.scrollTo({
                left: el.scrollLeft + e.deltaY,
                behavior: 'auto',
            });
        };
        el.addEventListener('wheel', onWheel);
        return function () { return el.removeEventListener('wheel', onWheel); };
    }, []);
    return elRef;
}
exports.useHorizontalScroll = useHorizontalScroll;
//# sourceMappingURL=useHorizontalScroll.js.map