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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSquare = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var style_1 = require("./style");
var src_1 = require("@shakil-design/utils/src");
var react_1 = require("react");
var context_1 = require("../../../theme/context");
var CustomSquare = function (_a) {
    var checked = _a.checked;
    var classes = (0, style_1.useStyles)({ checked: checked });
    var unit = (0, react_1.useContext)(context_1.UnitContext).unit;
    var roundToNearestEven = (0, src_1.useRoundToNearestEven)(unit).roundToNearestEven;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: {
            height: roundToNearestEven(16),
            width: roundToNearestEven(16),
            borderRadius: roundToNearestEven(2),
        }, className: classes["wrapper"] }, { children: (0, jsx_runtime_1.jsx)("div", { style: {
                height: roundToNearestEven(10),
                width: roundToNearestEven(10),
            }, className: (0, classnames_1.default)(classes["square"], checked && "".concat(classes["square"], "--checked"), !checked && "".concat(classes["square"], "--unchecked")) }) })));
};
exports.CustomSquare = CustomSquare;
//# sourceMappingURL=index.js.map