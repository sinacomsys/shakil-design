var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react/jsx-dev-runtime", "classnames", "../../atoms/baseIcon", "../../theme", "./style", "./useFileInput", "../../atoms"], function (require, exports, jsx_dev_runtime_1, classnames_1, baseIcon_1, theme_1, style_1, useFileInput_1, atoms_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileInput = void 0;
    classnames_1 = __importDefault(classnames_1);
    useFileInput_1 = __importDefault(useFileInput_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/file-input/index.tsx";
    const FileInput = ({ register, className, fileType }) => {
        const classes = (0, style_1.useStyle)();
        const { label, fileChangeHandler } = (0, useFileInput_1.default)(register);
        const { fileInput } = (0, theme_1.useTheme)();
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: (0, classnames_1.default)(classes["fileInput"], className) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ htmlFor: register === null || register === void 0 ? void 0 : register.name }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, Object.assign({ size: 16, color: fileInput }, { children: register === null || register === void 0 ? void 0 : register.name }), void 0, false, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 9 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("label", Object.assign({ className: classes["fileChooser"] }, { children: [label ? ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, Object.assign({ size: 16, color: fileInput }, { children: label }), void 0, false, { fileName: _jsxFileName, lineNumber: 29, columnNumber: 19 }, this)) : ((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: [(0, jsx_dev_runtime_1.jsxDEV)(baseIcon_1.BaseIcon, { size: { height: 10, width: 10 }, name: "Add-Box_Add-Icon" }, void 0, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 13 }, this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, Object.assign({ size: 16, color: fileInput }, { children: "Add File" }), void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 13 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 33, columnNumber: 14 }, this)), (0, jsx_dev_runtime_1.jsxDEV)("input", Object.assign({}, register, { onChange: fileChangeHandler, accept: fileType, type: "file", id: "formId", hidden: true }), void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 11 }, this));
    };
    exports.FileInput = FileInput;
});
//# sourceMappingURL=index.js.map