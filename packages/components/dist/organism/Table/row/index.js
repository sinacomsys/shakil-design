"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/row/index.tsx";
const react_1 = require("react");
const theme_1 = require("../../../theme");
const Row = (_a) => {
    var { isChecked, isOnCheckedRowsAvailable, isSelected } = _a, rest = __rest(_a, ["isChecked", "isOnCheckedRowsAvailable", "isSelected"]);
    const [isHoverd, setIsHovered] = (0, react_1.useState)(false);
    const { table: { selectedRow, rowHover } = {} } = (0, theme_1.useTheme)();
    return ((0, jsx_dev_runtime_1.jsxDEV)("tr", Object.assign({}, rest, { onMouseEnter: () => {
            setIsHovered(true);
        }, onMouseLeave: () => {
            setIsHovered(false);
        }, style: {
            backgroundColor: isChecked || isSelected
                ? selectedRow
                : isHoverd
                    ? rowHover
                    : "transparent",
            height: 32,
            borderBottom: ".5px solid #C1C0C0",
            cursor: isOnCheckedRowsAvailable ? "default" : "pointer",
        } }), void 0, false, { fileName: _jsxFileName, lineNumber: 19, columnNumber: 11 }, this));
};
exports.Row = Row;
//# sourceMappingURL=index.js.map