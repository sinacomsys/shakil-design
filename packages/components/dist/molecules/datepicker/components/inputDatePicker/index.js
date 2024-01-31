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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputDatePicker = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/inputDatePicker/index.tsx";
var atoms_1 = require("../../../../atoms");
var textInput_1 = require("../../../../molecules/textInput");
var datePickerProvider_1 = require("../datePickerProvider");
var theme_1 = require("../../../../theme");
var wrapperTemplate_1 = require("../wrapperTemplate");
var react_1 = require("react");
var calendarMode_1 = require("../../utils/calendarMode");
var datePickerPanel_1 = require("../datePickerPanel");
var useTheme = theme_1.theming.useTheme;
var InputDatePicker = function (_a) {
    var onChange = _a.onChange, testid = _a.testid, props = __rest(_a, ["onChange", "testid"]);
    var _b = (0, react_1.useState)(undefined), value = _b[0], setValue = _b[1];
    var Colors = useTheme();
    var handleOnConfirmDate = function (_a) {
        var value = _a.value;
        setValue(value);
        onChange === null || onChange === void 0 ? void 0 : onChange({ value: value });
    };
    var handleOnClearValue = function () {
        var _a;
        setValue(null);
        (_a = props.onClear) === null || _a === void 0 ? void 0 : _a.call(props);
    };
    var _value = props.value ? props.value : value;
    var inputValue = _value ? _value === null || _value === void 0 ? void 0 : _value.format(calendarMode_1.PERSIAN_FULL_TIME_FORMAT) : "";
    return ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Tooltip, __assign({ trigger: "click", content: (0, jsx_dev_runtime_1.jsxDEV)(datePickerProvider_1.DatePickerProvider, __assign({}, props, { children: function (_a) {
                var value = _a.value, disable = _a.disable, onGoToday = _a.onGoToday;
                return ((0, jsx_dev_runtime_1.jsxDEV)(wrapperTemplate_1.WrapperTemplate, __assign({ disable: disable, onFinalConfirm: function () {
                        handleOnConfirmDate({ value: value });
                    }, onGoToday: onGoToday, testid: testid }, { children: (0, jsx_dev_runtime_1.jsxDEV)(datePickerPanel_1.DatePickerPanel, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 63, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 21 }, _this));
            } }), void 0, false, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 16 }, _this) }, { children: (0, jsx_dev_runtime_1.jsxDEV)(textInput_1.TextInput, { AddonAfter: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { color: Colors.disableText, name: "Table-_-Clock", size: { height: 18, width: 18 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 71, columnNumber: 21 }, _this), onClear: handleOnClearValue, allowClear: props.allowClear, value: inputValue }, void 0, false, { fileName: _jsxFileName, lineNumber: 70, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 48, columnNumber: 11 }, _this));
};
exports.InputDatePicker = InputDatePicker;
//# sourceMappingURL=index.js.map