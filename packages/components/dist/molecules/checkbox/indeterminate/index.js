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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indeterminate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("./style");
var src_1 = require("@shakil-design/utils/src");
var Indeterminate = function () {
    var classes = (0, style_1.useStyles)();
    var roundToNearestEven = (0, src_1.useRoundToNearestEven)().roundToNearestEven;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: { height: roundToNearestEven(16), width: roundToNearestEven(16) }, className: classes["wrapper"] }, { children: (0, jsx_runtime_1.jsx)("div", { style: {
                height: roundToNearestEven(6),
                width: roundToNearestEven(6),
            }, className: classes["square"] }) })));
};
exports.Indeterminate = Indeterminate;
//# sourceMappingURL=index.js.map