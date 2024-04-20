"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleshIcon = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design/packages/components/src/organism/select/components/fleshIcon/index.tsx";
var classnames_1 = __importDefault(require("classnames"));
var atoms_1 = require("../../../../atoms");
var theme_1 = require("../../../../theme");
var style_1 = require("./style");
var FleshIcon = function (_a) {
    var isVisible = _a.isVisible;
    var _b = (0, theme_1.useTheme)().select, _c = _b === void 0 ? {} : _b, fleshIcon = _c.fleshIcon;
    var classes = (0, style_1.useStyles)();
    return ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { color: fleshIcon, name: "Every-Boxes-_-Flesh-Icon-for-more-choices", size: {
            height: 7,
            width: 12,
        }, wrapperClassName: (0, classnames_1.default)(classes["rotate-animation"], isVisible && "".concat(classes["rotate-animation"], "--selected")) }, void 0, false, { fileName: _jsxFileName, lineNumber: 10, columnNumber: 11 }, _this));
};
exports.FleshIcon = FleshIcon;
//# sourceMappingURL=index.js.map