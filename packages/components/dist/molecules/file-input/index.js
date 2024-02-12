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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileInput = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/file-input/index.tsx";
var classnames_1 = __importDefault(require("classnames"));
var baseIcon_1 = require("../../atoms/baseIcon");
var theme_1 = require("../../theme");
var style_1 = require("./style");
var useFileInput_1 = __importDefault(require("./useFileInput"));
var atoms_1 = require("../../atoms");
var FileInput = function (_a) {
    var register = _a.register, className = _a.className, fileType = _a.fileType;
    var classes = (0, style_1.useStyle)();
    var _b = (0, useFileInput_1.default)(register), label = _b.label, fileChangeHandler = _b.fileChangeHandler;
    var fileInput = (0, theme_1.useTheme)().fileInput;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)(classes["fileInput"], className) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("label", __assign({ htmlFor: register === null || register === void 0 ? void 0 : register.name }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ size: 16, color: fileInput }, { children: register === null || register === void 0 ? void 0 : register.name }), void 0, false, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 9 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("label", __assign({ className: classes["fileChooser"] }, { children: [label ? ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ size: 16, color: fileInput }, { children: label }), void 0, false, { fileName: _jsxFileName, lineNumber: 29, columnNumber: 19 }, _this)) : ((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: [(0, jsx_dev_runtime_1.jsxDEV)(baseIcon_1.BaseIcon, { size: { height: 10, width: 10 }, name: "Add-Box_Add-Icon" }, void 0, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 13 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ size: 16, color: fileInput }, { children: "Add File" }), void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 13 }, _this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 33, columnNumber: 14 }, _this)), (0, jsx_dev_runtime_1.jsxDEV)("input", __assign({}, register, { onChange: fileChangeHandler, accept: fileType, type: "file", id: "formId", hidden: true }), void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 11 }, _this));
};
exports.FileInput = FileInput;
//# sourceMappingURL=index.js.map