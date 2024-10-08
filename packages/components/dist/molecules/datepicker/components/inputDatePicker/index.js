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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputDatePicker = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
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
    var onChange = _a.onChange, testid = _a.testid, AddonAfter = _a.AddonAfter, addonAfterClassName = _a.addonAfterClassName, addonAfterStyle = _a.addonAfterStyle, placement = _a.placement, props = __rest(_a, ["onChange", "testid", "AddonAfter", "addonAfterClassName", "addonAfterStyle", "placement"]);
    var _b = (0, react_1.useState)(null), value = _b[0], setValue = _b[1];
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
    return ((0, jsx_runtime_1.jsx)(atoms_1.Tooltip, __assign({ trigger: "click", placement: placement, content: (0, jsx_runtime_1.jsx)(datePickerProvider_1.DatePickerProvider, __assign({}, props, { children: function (_a) {
                var value = _a.value, disable = _a.disable, onGoToday = _a.onGoToday;
                return ((0, jsx_runtime_1.jsx)(wrapperTemplate_1.WrapperTemplate, __assign({ disable: disable, onFinalConfirm: function () {
                        handleOnConfirmDate({ value: value });
                    }, onGoToday: onGoToday, testid: testid }, { children: (0, jsx_runtime_1.jsx)(datePickerPanel_1.DatePickerPanel, {}) })));
            } })) }, { children: (0, jsx_runtime_1.jsx)(textInput_1.TextInput, __assign({ AddonAfter: AddonAfter ? (AddonAfter) : ((0, jsx_runtime_1.jsx)(atoms_1.BaseIcon, { color: Colors.disableText, name: "Table-_-Clock", size: { height: 18, width: 18 } })) }, { addonAfterStyle: addonAfterStyle, addonAfterClassName: addonAfterClassName }, { onClear: handleOnClearValue, allowClear: props.allowClear, value: inputValue, disabled: props.disabled })) })));
};
exports.InputDatePicker = InputDatePicker;
//# sourceMappingURL=index.js.map