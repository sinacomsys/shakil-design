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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.fonts = exports.Text = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "/home/amir/project/TML/shakil-design/packages/components/src/atoms/text/index.tsx";
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var baseText_1 = require("./baseText/baseText");
var style_1 = require("./style");
Object.defineProperty(exports, "fonts", { enumerable: true, get: function () { return style_1.fonts; } });
var context_1 = require("../../theme/context");
var src_1 = require("@shakil-design/utils/src");
var Text = React.memo(React.forwardRef(function (_a, ref) {
    var _b = _a.theme, theme = _b === void 0 ? "Regular" : _b, className = _a.className, color = _a.color, style = _a.style, _c = _a.size, size = _c === void 0 ? 16 : _c, weight = _a.weight, variant = _a.variant, lineHeight = _a.lineHeight, rest = __rest(_a, ["theme", "className", "color", "style", "size", "weight", "variant", "lineHeight"]);
    var fonts = (0, style_1.useFonts)();
    var classes = (0, style_1.useStyles)();
    var unit = React.useContext(context_1.UnitContext).unit;
    var fontSize = unit === "viewport" && typeof size === "number"
        ? (0, src_1.pxToVhString)(size)
        : size;
    var fontWeight = typeof weight === "string" ? style_1.fontWeights[weight] : weight;
    var setVariant = function () {
        if (typeof size !== "number" && (size === null || size === void 0 ? void 0 : size.match(/h(1|2|3|4|5|6)/g))) {
            return size;
        }
        return "p";
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)(baseText_1.BaseText, __assign({ ref: ref, variant: variant || setVariant(), className: (0, classnames_1.default)(fonts[theme], className, classes.text), style: __assign({ color: color, fontWeight: fontWeight, lineHeight: lineHeight, fontSize: fontSize }, style) }, rest), void 0, false, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 15 }, _this));
}));
exports.Text = Text;
//# sourceMappingURL=index.js.map