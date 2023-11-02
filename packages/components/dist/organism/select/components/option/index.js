define(["require", "exports", "react/jsx-dev-runtime", "../../../../atoms/text", "./style", "../../../../molecules"], function (require, exports, jsx_dev_runtime_1, text_1, style_1, molecules_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Option = void 0;
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/components/option/index.tsx";
    const Option = ({ children, value, onClick, isSelected, multiple, }) => {
        const classes = (0, style_1.useStyles)();
        const handleOnClick = () => {
            onClick(value.value);
        };
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ onClick: handleOnClick, className: classes["item"] }, { children: [multiple ? ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { marginInlineEnd: 5 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(molecules_1.CheckBox, { checked: isSelected }, void 0, false, { fileName: _jsxFileName, lineNumber: 22, columnNumber: 11 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 20, columnNumber: 20 }, this)) : null, (0, jsx_dev_runtime_1.jsxDEV)(text_1.Text, Object.assign({ size: 16, theme: "Regular", color: "#575757" }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 25, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 18, columnNumber: 11 }, this));
    };
    exports.Option = Option;
});
//# sourceMappingURL=index.js.map