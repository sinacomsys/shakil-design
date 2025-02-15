"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOnClickOutSide = void 0;
var react_1 = require("react");
function useOnClickOutSide(_a) {
    var element = _a.element, handler = _a.handler, extraElement = _a.extraElement;
    (0, react_1.useEffect)(function () {
        function handleClickOutside(event) {
            if (!element || element.contains(event.target))
                return;
            if ((extraElement && !extraElement.contains(event.target)) ||
                !extraElement) {
                handler();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [element, extraElement, handler]);
}
exports.useOnClickOutSide = useOnClickOutSide;
//# sourceMappingURL=useOnclickOutsiede.js.map