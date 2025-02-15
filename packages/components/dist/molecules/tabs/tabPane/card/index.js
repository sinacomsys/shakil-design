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
exports.Card = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var titleMutualDefaultContent_1 = require("../titleMutualDefaultContent");
var theme_1 = require("../../../../theme");
var atoms_1 = require("../../../../atoms");
var style_1 = require("./style");
var Card = function (_a) {
    var id = _a.id, isActive = _a.isActive, title = _a.title, onClose = _a.onClose, closeable = _a.closeable, onChange = _a.onChange;
    var _b = (0, theme_1.useTheme)().tab, _c = _b === void 0 ? {} : _b, card = _c.card;
    var classes = (0, style_1.useStyles)({ isActive: isActive });
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: classes["title-wrapper"], onClick: function (e) {
            e.preventDefault();
            onChange === null || onChange === void 0 ? void 0 : onChange(id);
        } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: classes["default-title"] }, { children: typeof title === "string" ? ((0, jsx_runtime_1.jsx)(titleMutualDefaultContent_1.TitleMutualDefaultContent, { color: isActive ? card === null || card === void 0 ? void 0 : card.activeColor : card === null || card === void 0 ? void 0 : card.color, title: title, theme: isActive ? "bold" : "Regular" })) : typeof title === "function" ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: title({ id: id, isActive: isActive }) })) : null })), closeable ? ((0, jsx_runtime_1.jsx)(atoms_1.BaseIcon, { color: isActive ? card === null || card === void 0 ? void 0 : card.activeCross : card === null || card === void 0 ? void 0 : card.cross, name: "Performance-_-Table-Setting-_-Cross-icon-for-Delete-Item", size: { height: 10, width: 10 }, onClick: function (event) {
                    event.stopPropagation();
                    onClose === null || onClose === void 0 ? void 0 : onClose(id);
                } })) : null] })));
};
exports.Card = Card;
//# sourceMappingURL=index.js.map