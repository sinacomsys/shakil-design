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
exports.Line = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var theme_1 = require("../../../../theme");
var style_1 = require("./style");
var titleMutualDefaultContent_1 = require("../titleMutualDefaultContent");
var Line = function (_a) {
    var id = _a.id, isActive = _a.isActive, onChange = _a.onChange, title = _a.title;
    var _b = (0, theme_1.useTheme)().tab, _c = _b === void 0 ? {} : _b, line = _c.line;
    var classes = (0, style_1.useStyles)();
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ onClick: function (e) {
            e.preventDefault();
            onChange === null || onChange === void 0 ? void 0 : onChange(id);
        }, style: { cursor: "pointer" } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: classes["title-wrapper"] }, { children: typeof title === "string" ? ((0, jsx_runtime_1.jsx)(titleMutualDefaultContent_1.TitleMutualDefaultContent, { color: line === null || line === void 0 ? void 0 : line.tabColor, title: title, theme: isActive ? "bold" : "Regular" })) : typeof title === "function" ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: title({ id: id, isActive: isActive }) })) : null }), id), (0, jsx_runtime_1.jsx)("div", { className: classes["line"], style: {
                    backgroundColor: isActive ? line === null || line === void 0 ? void 0 : line.lineColor : "transparent",
                } })] })));
};
exports.Line = Line;
//# sourceMappingURL=index.js.map