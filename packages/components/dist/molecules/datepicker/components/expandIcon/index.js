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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpandIcon = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/expandIcon/index.tsx";
var react_1 = require("react");
var atoms_1 = require("../../../../atoms");
var style_1 = require("./style");
var context_1 = require("../../context");
var ExpandIcon = function (_a) {
    var handleOndisproveDate = _a.handleOndisproveDate;
    var classes = (0, style_1.useStyles)();
    var _b = (0, react_1.useContext)(context_1.DatePickerContext), onExtendMatrix = _b.onExtendMatrix, onShrinkMatrix = _b.onShrinkMatrix, isMatrixOpen = _b.isMatrixOpen;
    var handleOnClick = function () {
        handleOndisproveDate();
        if (isMatrixOpen) {
            onShrinkMatrix();
        }
        else {
            onExtendMatrix();
        }
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["wrapper"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { wrapperClassName: "".concat(classes["wrapper"], "--more-choices"), color: "#eeeeee", name: "Every-Boxes-_-Flesh-Icon-for-more-choices", size: { height: 5, width: 9 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 26, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { wrapperStyle: { cursor: "pointer" }, onClick: handleOnClick, color: "#eeeeee", name: "Calendar-_-Calendar-Icon", size: {
                    width: 18,
                    height: 18,
                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 32, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 11 }, _this));
};
exports.ExpandIcon = ExpandIcon;
//# sourceMappingURL=index.js.map