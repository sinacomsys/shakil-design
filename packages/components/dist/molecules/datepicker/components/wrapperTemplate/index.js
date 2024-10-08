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
exports.WrapperTemplate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var atoms_1 = require("../../../../atoms");
var style_1 = require("./style");
var button_1 = require("../../../button");
var WrapperTemplate = function (_a) {
    var children = _a.children, onFinalConfirm = _a.onFinalConfirm, disable = _a.disable, onGoToday = _a.onGoToday, testid = _a.testid;
    var _b = testid || {}, goToday = _b.goToday, confirm = _b.confirm;
    var classes = (0, style_1.useStyles)();
    var handleConfirm = function () {
        if (disable)
            return;
        onFinalConfirm === null || onFinalConfirm === void 0 ? void 0 : onFinalConfirm();
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: classes["wrapper"] }, { children: [children, (0, jsx_runtime_1.jsx)(button_1.Button, __assign({ "data-testid": goToday, onClick: onGoToday, className: classes["go-today"], size: "small" }, { children: (0, jsx_runtime_1.jsx)(atoms_1.Text, __assign({ size: 14, color: "#FFFFFF" }, { children: "Go Today!" })) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: classes["footer-icons"] }, { children: [(0, jsx_runtime_1.jsx)(atoms_1.BaseIcon, { wrapperStyle: { cursor: "pointer" }, name: "Calendar-_-Close", size: { height: 24, width: 24 } }), (0, jsx_runtime_1.jsx)(atoms_1.BaseIcon, { "data-testid": confirm, onClick: handleConfirm, name: "Calendar-_-Apply-Changes", size: { height: 24, width: 24 }, wrapperStyle: { cursor: disable ? "not-allowed" : "pointer" } })] }))] })));
};
exports.WrapperTemplate = WrapperTemplate;
//# sourceMappingURL=index.js.map