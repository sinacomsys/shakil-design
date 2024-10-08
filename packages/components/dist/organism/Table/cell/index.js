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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var text_1 = require("../../../atoms/text");
var Cell = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)("td", __assign({}, rest, { style: {
            height: "inherit",
        } }, { children: typeof children !== "object" ? ((0, jsx_runtime_1.jsx)(text_1.Text, __assign({ theme: "Regular", size: 14 }, { children: children }))) : (children) })));
};
exports.Cell = Cell;
//# sourceMappingURL=index.js.map