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
var _this = this;
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/file-input/index.tsx";
import classNames from "classnames";
import { BaseIcon } from "../../atoms/baseIcon";
import { useTheme } from "../../theme";
import { useStyle } from "./style";
import useFileInput from "./useFileInput";
import { Text } from "../../atoms";
var FileInput = function (_a) {
    var register = _a.register, className = _a.className, fileType = _a.fileType;
    var classes = useStyle();
    var _b = useFileInput(register), label = _b.label, fileChangeHandler = _b.fileChangeHandler;
    var fileInput = useTheme().fileInput;
    return (_jsxDEV("div", __assign({ className: classNames(classes["fileInput"], className) }, { children: [_jsxDEV("label", __assign({ htmlFor: register === null || register === void 0 ? void 0 : register.name }, { children: _jsxDEV(Text, __assign({ size: 16, color: fileInput }, { children: register === null || register === void 0 ? void 0 : register.name }), void 0, false, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 9 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 7 }, _this), _jsxDEV("label", __assign({ className: classes["fileChooser"] }, { children: [label ? (_jsxDEV(Text, __assign({ size: 16, color: fileInput }, { children: label }), void 0, false, { fileName: _jsxFileName, lineNumber: 29, columnNumber: 19 }, _this)) : (_jsxDEV(_Fragment, { children: [_jsxDEV(BaseIcon, { size: { height: 10, width: 10 }, name: "Add-Box_Add-Icon" }, void 0, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 13 }, _this), _jsxDEV(Text, __assign({ size: 16, color: fileInput }, { children: "Add File" }), void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 13 }, _this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 33, columnNumber: 14 }, _this)), _jsxDEV("input", __assign({}, register, { onChange: fileChangeHandler, accept: fileType, type: "file", id: "formId", hidden: true }), void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 11 }, _this));
};
export { FileInput };
//# sourceMappingURL=index.js.map