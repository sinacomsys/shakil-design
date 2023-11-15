"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowSize = void 0;
var react_1 = require("react");
var useWindowSize = function () {
    var _a = (0, react_1.useState)({
        height: window.innerHeight,
        width: window.innerWidth,
    }), _b = _a[0], height = _b.height, width = _b.width, setScreenSizes = _a[1];
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            setScreenSizes({ height: window.innerHeight, width: window.innerWidth });
        };
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return { height: height, width: width };
};
exports.useWindowSize = useWindowSize;
//# sourceMappingURL=useWindowSize.js.map