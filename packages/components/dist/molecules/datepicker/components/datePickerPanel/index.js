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
exports.DatePickerPanel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var context_1 = require("../../context");
var react_1 = require("react");
var manualImportDate_1 = require("../manualImportDate");
var style_1 = require("./style");
var calendar_1 = require("../calendar");
var expandIcon_1 = require("../expandIcon");
var DatePickerPanel = function () {
    var classes = (0, style_1.useStyle)();
    var _a = (0, react_1.useContext)(context_1.DatePickerContext), isConfirmed = _a.isConfirmed, onEditAgain = _a.onEditAgain;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(calendar_1.Calendar, {}), (0, jsx_runtime_1.jsxs)("div", __assign({ className: classes["manualInput"] }, { children: [(0, jsx_runtime_1.jsx)(manualImportDate_1.ManualImportDate, {}), (0, jsx_runtime_1.jsx)("div", __assign({ className: classes["expand"] }, { children: (0, jsx_runtime_1.jsx)(expandIcon_1.ExpandIcon, {}) })), isConfirmed ? ((0, jsx_runtime_1.jsx)("div", { onClick: onEditAgain, className: classes["overlay"] })) : null] }))] }));
};
exports.DatePickerPanel = DatePickerPanel;
//# sourceMappingURL=index.js.map