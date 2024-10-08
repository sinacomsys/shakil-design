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
exports.ExpandIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var atoms_1 = require("../../../../atoms");
var style_1 = require("./style");
var context_1 = require("../../context");
var ExpandIcon = function () {
    var classes = (0, style_1.useStyles)();
    var _a = (0, react_1.useContext)(context_1.DatePickerContext), onExtendMatrix = _a.onExtendMatrix, onShrinkMatrix = _a.onShrinkMatrix, isMatrixOpen = _a.isMatrixOpen;
    var handleOnClick = function () {
        if (isMatrixOpen) {
            onShrinkMatrix();
        }
        else {
            onExtendMatrix();
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: classes["wrapper"] }, { children: [(0, jsx_runtime_1.jsx)(atoms_1.BaseIcon, { wrapperClassName: "".concat(classes["wrapper"], "--more-choices"), color: "#eeeeee", name: "Every-Boxes-_-Flesh-Icon-for-more-choices", size: { height: 5, width: 9 } }), (0, jsx_runtime_1.jsx)(atoms_1.BaseIcon, { wrapperStyle: { cursor: "pointer" }, onClick: handleOnClick, color: "#eeeeee", name: "Calendar-_-Calendar-Icon", size: {
                    width: 18,
                    height: 18,
                } })] })));
};
exports.ExpandIcon = ExpandIcon;
//# sourceMappingURL=index.js.map