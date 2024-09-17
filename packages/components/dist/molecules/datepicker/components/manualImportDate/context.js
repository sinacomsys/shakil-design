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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerFormProvider = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/manualImportDate/context.tsx";
var react_hook_form_1 = require("react-hook-form");
var DatePickerFormProvider = function (_a) {
    var children = _a.children;
    var methods = (0, react_hook_form_1.useForm)();
    return (0, jsx_dev_runtime_1.jsxDEV)(react_hook_form_1.FormProvider, __assign({}, methods, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 18, columnNumber: 9 }, _this);
};
exports.DatePickerFormProvider = DatePickerFormProvider;
//# sourceMappingURL=context.js.map