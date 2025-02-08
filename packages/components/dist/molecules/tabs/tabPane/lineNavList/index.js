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
exports.LineNavList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var line_1 = require("../line");
var style_1 = require("./style");
var LineNavList = function (_a) {
    var items = _a.items, activeTab = _a.activeTab, onChange = _a.onChange, onClose = _a.onClose;
    var classes = (0, style_1.useStyles)();
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: classes["wrapper"] }, { children: items.map(function (_a) {
            var id = _a.id, title = _a.title;
            var isActive = activeTab === id;
            return ((0, jsx_runtime_1.jsx)(line_1.Line, { id: id, isActive: isActive, onChange: onChange, onClose: onClose, title: title }, id));
        }) })));
};
exports.LineNavList = LineNavList;
//# sourceMappingURL=index.js.map