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
define(["require", "exports", "react/jsx-dev-runtime", "@shakil-design/utils", "../../atoms", "../../molecules", "../../theme", "./style"], function (require, exports, jsx_dev_runtime_1, utils_1, atoms_1, molecules_1, theme_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NumberInput = void 0;
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/numberInput/index.tsx";
    const { useTheme } = theme_1.theming;
    const NumberInput = (_a) => {
        var { wrapperStyle, onDecrease, onIncrease, unit = "viewport" } = _a, rest = __rest(_a, ["wrapperStyle", "onDecrease", "onIncrease", "unit"]);
        const classes = (0, style_1.useStyles)();
        const { disableField } = useTheme();
        const iconWidth = unit === "viewport" ? (0, utils_1.pxToVh)(12) : 12;
        const iconHeight = unit === "viewport" ? (0, utils_1.pxToVh)(7) : 7;
        const fontSize = unit === "viewport" ? (0, utils_1.pxToVhString)(14) : 14;
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: Object.assign({ position: "relative" }, wrapperStyle) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(molecules_1.TextInput, Object.assign({}, rest, { unit: unit, className: classes["input"], style: Object.assign({ paddingInline: 24, textAlign: "center", fontSize: fontSize }, rest.style) }), void 0, false, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { name: "Amount-Boxes_Decrease", size: { height: iconHeight, width: iconWidth }, unit: unit, wrapperClassName: classes["arrowDown"], color: rest.disabled ? disableField : "#575757", onClick: onDecrease }, void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { onClick: onIncrease, color: rest.disabled ? disableField : "#575757", name: "Amount-Boxes_Increase", size: { height: iconHeight, width: iconWidth }, unit: unit, wrapperClassName: classes["arrowUp"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 26, columnNumber: 11 }, this));
    };
    exports.NumberInput = NumberInput;
});
//# sourceMappingURL=index.js.map