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
exports.EndOfList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("./style");
var EndOfList = function (_a) {
    var children = _a.children, numberOfColumns = _a.numberOfColumns, transformY = _a.transformY;
    var classes = (0, style_1.useStyles)();
    return ((0, jsx_runtime_1.jsx)("tr", __assign({ style: {
            transform: "translateY(".concat(transformY, "px)"),
        } }, { children: (0, jsx_runtime_1.jsx)("td", __assign({ colSpan: numberOfColumns + 1 }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: classes["wrapper"] }, { children: children })) })) })));
};
exports.EndOfList = EndOfList;
//# sourceMappingURL=index.js.map