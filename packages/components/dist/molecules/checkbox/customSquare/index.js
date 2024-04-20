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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSquare = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design/packages/components/src/molecules/checkbox/customSquare/index.tsx";
var classnames_1 = __importDefault(require("classnames"));
var style_1 = require("./style");
var src_1 = require("@shakil-design/utils/src");
var CustomSquare = function (_a) {
    var checked = _a.checked;
    var classes = (0, style_1.useStyles)({ checked: checked });
    var roundToNearestEven = (0, src_1.useRoundToNearestEven)().roundToNearestEven;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: {
            height: roundToNearestEven(16),
            width: roundToNearestEven(16),
            borderRadius: roundToNearestEven(2),
        }, className: classes["wrapper"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", { style: {
                height: roundToNearestEven(10),
                width: roundToNearestEven(10),
            }, className: (0, classnames_1.default)(classes["square"], checked && "".concat(classes["square"], "--checked"), !checked && "".concat(classes["square"], "--unchecked")) }, void 0, false, { fileName: _jsxFileName, lineNumber: 22, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 13, columnNumber: 11 }, _this));
};
exports.CustomSquare = CustomSquare;
//# sourceMappingURL=index.js.map