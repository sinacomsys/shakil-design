"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollView = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/scrollView/index.tsx";
const react_1 = __importDefault(require("react"));
const style_1 = require("./style");
const classnames_1 = __importDefault(require("classnames"));
const ScrollView = react_1.default.forwardRef(({ children, className, style }, ref) => {
    const classes = (0, style_1.useStyles)();
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ ref: ref, style: Object.assign({}, style), className: (0, classnames_1.default)(className, classes.container) }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 14, columnNumber: 13 }, this));
});
exports.ScrollView = ScrollView;
ScrollView.displayName = "ScrollView";
//# sourceMappingURL=index.js.map