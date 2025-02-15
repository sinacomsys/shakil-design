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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
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
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, classnames_1.default)(classes["fileInput"], className) }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: register === null || register === void 0 ? void 0 : register.name }, { children: (0, jsx_runtime_1.jsx)(atoms_1.Text, __assign({ size: 16, color: fileInput }, { children: register === null || register === void 0 ? void 0 : register.name })) })), (0, jsx_runtime_1.jsxs)("label", __assign({ className: classes["fileChooser"] }, { children: [label ? ((0, jsx_runtime_1.jsx)(atoms_1.Text, __assign({ size: 16, color: fileInput }, { children: label }))) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(baseIcon_1.BaseIcon, { size: { height: 10, width: 10 }, name: "Add-Box_Add-Icon" }), (0, jsx_runtime_1.jsx)(atoms_1.Text, __assign({ size: 16, color: fileInput }, { children: "Add File" }))] })), (0, jsx_runtime_1.jsx)("input", __assign({}, register, { onChange: fileChangeHandler, accept: fileType, type: "file", id: "formId", hidden: true }))] }))] })));
};
exports.FileInput = FileInput;
//# sourceMappingURL=index.js.map