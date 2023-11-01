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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/cell/index.tsx";
/* eslint-disable react/jsx-key */
const classnames_1 = __importDefault(require("classnames"));
const __1 = require("..");
const text_1 = require("../../../atoms/text");
const style_1 = require("./style");
const Cell = (_a) => {
    var { children, onPress, align = __1.DEFAULT_ALIGN } = _a, rest = __rest(_a, ["children", "onPress", "align"]);
    const classes = (0, style_1.useStyles)();
    return ((0, jsx_dev_runtime_1.jsxDEV)("td", Object.assign({}, rest, { style: { height: "inherit" }, onClick: onPress, className: (0, classnames_1.default)(align === "start" && classes["start"], align === "center" && classes["center"], align === "end" && classes["end"]) }, { children: typeof children !== "object" ? ((0, jsx_dev_runtime_1.jsxDEV)(text_1.Text, Object.assign({ theme: "Regular", size: "small", color: "red" }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 32, columnNumber: 40 }, this)) : (children) }), void 0, false, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 11 }, this));
};
exports.Cell = Cell;
//# sourceMappingURL=index.js.map