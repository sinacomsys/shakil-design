"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "/home/amir/project/TML/amir-shakil-design/shakil-design/packages/components/src/organism/Table/cell/index.tsx";
/* eslint-disable react/jsx-key */
var classnames_1 = __importDefault(require("classnames"));
var __1 = require("..");
var text_1 = require("../../../atoms/text");
var style_1 = require("./style");
var Cell = function (_a) {
    var children = _a.children, onPress = _a.onPress, _b = _a.align, align = _b === void 0 ? __1.DEFAULT_ALIGN : _b, ellipsis = _a.ellipsis, rest = __rest(_a, ["children", "onPress", "align", "ellipsis"]);
    var classes = (0, style_1.useStyles)();
    return ((0, jsx_dev_runtime_1.jsxDEV)("td", __assign({}, rest, { style: {
            height: "inherit",
        }, onClick: onPress, className: (0, classnames_1.default)(align === "start" && classes["start"], align === "center" && classes["center"], align === "end" && classes["end"], ellipsis && classes["ellipsis"]) }, { children: typeof children !== "object" ? ((0, jsx_dev_runtime_1.jsxDEV)(text_1.Text, __assign({ theme: "Regular", size: "small", color: "red" }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 40 }, _this)) : (children) }), void 0, false, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 11 }, _this));
};
exports.Cell = Cell;
//# sourceMappingURL=index.js.map