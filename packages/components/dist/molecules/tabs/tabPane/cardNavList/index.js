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
exports.CardNavList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var card_1 = require("../card");
var style_1 = require("./style");
var CardNavList = function (_a) {
    var items = _a.items, onChange = _a.onChange, onClose = _a.onClose, activeTab = _a.activeTab;
    var classes = (0, style_1.useStyles)();
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: classes["wrapper"] }, { children: items.map(function (_a) {
            var title = _a.title, id = _a.id, closeable = _a.closeable;
            var isActive = activeTab === id;
            return ((0, jsx_runtime_1.jsx)(card_1.Card, { title: title, isActive: isActive, onChange: onChange, id: id, onClose: onClose, closeable: Boolean(closeable) }, id));
        }) })));
};
exports.CardNavList = CardNavList;
//# sourceMappingURL=index.js.map