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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseIcon = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "/home/amir/project/TML/amir-shakil-design/shakil-design/packages/components/src/atoms/baseIcon/index.tsx";
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var selection_json_1 = __importDefault(require("@shakil-design/asset/src/icomoon/selection.json"));
var createIconSet_1 = require("./createIconSet");
var BaseIcon = react_1.default.forwardRef(function (_a, ref) {
    var name = _a.name, color = _a.color, size = _a.size, wrapperStyle = _a.wrapperStyle, wrapperClassName = _a.wrapperClassName, rest = __rest(_a, ["name", "color", "size", "wrapperStyle", "wrapperClassName"]);
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ ref: ref, className: (0, classnames_1.default)(wrapperClassName), style: __assign({ display: "inline-flex" }, wrapperStyle) }, rest, { children: (0, jsx_dev_runtime_1.jsxDEV)(createIconSet_1.IconTemplate, { name: name, color: color, size: size, iconsJson: selection_json_1.default }, void 0, false, { fileName: _jsxFileName, lineNumber: 30, columnNumber: 9 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 13 }, _this));
});
exports.BaseIcon = BaseIcon;
BaseIcon.displayName = "BaseIcon";
//# sourceMappingURL=index.js.map