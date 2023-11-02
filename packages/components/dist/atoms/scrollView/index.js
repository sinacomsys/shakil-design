var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react/jsx-dev-runtime", "react", "./style", "classnames"], function (require, exports, jsx_dev_runtime_1, react_1, style_1, classnames_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScrollView = void 0;
    react_1 = __importDefault(react_1);
    classnames_1 = __importDefault(classnames_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/scrollView/index.tsx";
    const ScrollView = react_1.default.forwardRef(({ children, className, style }, ref) => {
        const classes = (0, style_1.useStyles)();
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ ref: ref, style: Object.assign({}, style), className: (0, classnames_1.default)(className, classes.container) }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 14, columnNumber: 13 }, this));
    });
    exports.ScrollView = ScrollView;
    ScrollView.displayName = "ScrollView";
});
//# sourceMappingURL=index.js.map