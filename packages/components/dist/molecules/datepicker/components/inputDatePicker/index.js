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
exports.InputDatePicker = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/inputDatePicker/index.tsx";
var atoms_1 = require("../../../../atoms");
var textInput_1 = require("../../../../molecules/textInput");
var datePickerProvider_1 = require("../datePickerProvider");
var panel_1 = require("../panel");
var theme_1 = require("../../../../theme");
var useTheme = theme_1.theming.useTheme;
var InputDatePicker = function (props) {
    var Colors = useTheme();
    return ((0, jsx_dev_runtime_1.jsxDEV)(datePickerProvider_1.DatePickerProvider, __assign({}, props, { children: function (_a) {
            var value = _a.value, onChangeDateInputText = _a.onChangeDateInputText;
            return ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Tooltip, __assign({ trigger: "click", content: (0, jsx_dev_runtime_1.jsxDEV)(panel_1.Panel, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 45 }, _this) }, { children: (0, jsx_dev_runtime_1.jsxDEV)(textInput_1.TextInput, { AddonAfter: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { color: Colors.disableText, name: "Table-_-Clock", size: { height: 18, width: 18 }, unit: "pixel" }, void 0, false, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 27 }, _this), onClear: props.onClear, allowClear: props.allowClear, unit: props.unit, value: value, onChangeText: onChangeDateInputText }, void 0, false, { fileName: _jsxFileName, lineNumber: 22, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 20, columnNumber: 17 }, _this));
        } }), void 0, false, { fileName: _jsxFileName, lineNumber: 17, columnNumber: 11 }, _this));
};
exports.InputDatePicker = InputDatePicker;
//# sourceMappingURL=index.js.map