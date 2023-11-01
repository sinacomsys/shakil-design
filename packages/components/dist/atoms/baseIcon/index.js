"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseIcon = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/baseIcon/index.tsx";
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const selection_json_1 = __importDefault(require("@shakil-design/asset/src/icomoon/selection.json"));
const createIconSet_1 = require("./createIconSet");
const IconMoon = (0, createIconSet_1.createIcomoonIconSet)(selection_json_1.default);
const BaseIcon = react_1.default.forwardRef((_a, ref) => {
    var { name, color, size, wrapperStyle, wrapperClassName, unit = "pixel" } = _a, rest = __rest(_a, ["name", "color", "size", "wrapperStyle", "wrapperClassName", "unit"]);
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ ref: ref, className: (0, classnames_1.default)(wrapperClassName), style: Object.assign({ display: "inline-flex" }, wrapperStyle) }, rest, { children: (0, jsx_dev_runtime_1.jsxDEV)(IconMoon, { name: name, color: color, size: { height: size.height, width: size.width }, unit: unit }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 9 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 40, columnNumber: 13 }, this));
});
exports.BaseIcon = BaseIcon;
BaseIcon.displayName = "BaseIcon";
//# sourceMappingURL=index.js.map