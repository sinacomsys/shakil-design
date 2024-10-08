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
exports.Option = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var text_1 = require("../../../../atoms/text");
var style_1 = require("./style");
var molecules_1 = require("../../../../molecules");
var Option = function (_a) {
    var children = _a.children, onClick = _a.onClick, isSelected = _a.isSelected, multiple = _a.multiple;
    var classes = (0, style_1.useStyles)();
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ onClick: onClick, className: classes["item"] }, { children: [multiple ? ((0, jsx_runtime_1.jsx)("div", __assign({ style: { marginInlineEnd: 5 } }, { children: (0, jsx_runtime_1.jsx)(molecules_1.CheckBox, { checked: isSelected }) }))) : null, (0, jsx_runtime_1.jsx)(text_1.Text, __assign({ ellipsis: true, size: 16, theme: "Regular", color: "#575757" }, { children: children }))] })));
};
exports.Option = Option;
//# sourceMappingURL=index.js.map