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
exports.CustomCircle = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/radio/internalRadio/customCircle.tsx";
var style_1 = require("./style");
var utils_1 = require("@shakil-design/utils");
var CustomCircle = function (_a) {
    var borderColor = _a.borderColor, backgroundColor = _a.backgroundColor;
    var classes = (0, style_1.useStyles)({ backgroundColor: backgroundColor, borderColor: borderColor });
    var roundToNearestEven = (0, utils_1.useRoundToNearestEven)().roundToNearestEven;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { width: roundToNearestEven(16), height: roundToNearestEven(16) }, className: classes["outter-circle"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", { style: {
                width: roundToNearestEven(10),
                height: roundToNearestEven(10),
            }, className: classes["inner-circle"] }, void 0, false, { fileName: _jsxFileName, lineNumber: 16, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 11, columnNumber: 11 }, _this));
};
exports.CustomCircle = CustomCircle;
//# sourceMappingURL=customCircle.js.map