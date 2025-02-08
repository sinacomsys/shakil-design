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
exports.TitleMutualDefaultContent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var atoms_1 = require("../../../../atoms");
var TitleMutualDefaultContent = function (_a) {
    var color = _a.color, title = _a.title, theme = _a.theme;
    return ((0, jsx_runtime_1.jsx)(atoms_1.Text, __assign({ size: 14, theme: theme, color: color, ellipsis: true }, { children: title })));
};
exports.TitleMutualDefaultContent = TitleMutualDefaultContent;
//# sourceMappingURL=index.js.map