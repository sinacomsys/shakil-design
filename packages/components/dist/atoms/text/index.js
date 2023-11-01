"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fonts = exports.Text = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/text/index.tsx";
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const baseText_1 = require("./baseText/baseText");
const style_1 = require("./style");
Object.defineProperty(exports, "fonts", { enumerable: true, get: function () { return style_1.fonts; } });
const Text = React.memo(React.forwardRef((_a, ref) => {
    var { theme = "Regular", className, color, style, size, weight, variant, lineHeight } = _a, rest = __rest(_a, ["theme", "className", "color", "style", "size", "weight", "variant", "lineHeight"]);
    const fonts = (0, style_1.useFonts)();
    const fontWeight = typeof weight === "string" ? style_1.fontWeights[weight] : weight;
    const setVariant = () => {
        if (typeof size !== "number" && (size === null || size === void 0 ? void 0 : size.match(/h(1|2|3|4|5|6)/g))) {
            return size;
        }
        return "p";
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)(baseText_1.BaseText, Object.assign({ ref: ref, variant: variant || setVariant(), className: (0, classnames_1.default)(fonts[theme], className), style: Object.assign({ color, fontSize: size, fontWeight,
            lineHeight }, style) }, rest), void 0, false, { fileName: _jsxFileName, lineNumber: 40, columnNumber: 15 }, this));
}));
exports.Text = Text;
//# sourceMappingURL=index.js.map