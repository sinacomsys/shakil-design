"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputDatePicker = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/inputDatePicker/index.tsx";
const atoms_1 = require("../../../../atoms");
const textInput_1 = require("../../../../molecules/textInput");
const datePickerProvider_1 = require("../datePickerProvider");
const panel_1 = require("../panel");
const theme_1 = require("../../../../theme");
const { useTheme } = theme_1.theming;
const InputDatePicker = (props) => {
    const Colors = useTheme();
    return ((0, jsx_dev_runtime_1.jsxDEV)(datePickerProvider_1.DatePickerProvider, Object.assign({}, props, { children: ({ value, onChangeDateInputText }) => {
            return ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Tooltip, Object.assign({ trigger: "click", content: (0, jsx_dev_runtime_1.jsxDEV)(panel_1.Panel, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 45 }, this) }, { children: (0, jsx_dev_runtime_1.jsxDEV)(textInput_1.TextInput, { AddonAfter: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { color: Colors.disableText, name: "Table-_-Clock", size: { height: 18, width: 18 }, unit: "pixel" }, void 0, false, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 27 }, this), onClear: props.onClear, allowClear: props.allowClear, unit: props.unit, value: value, onChangeText: onChangeDateInputText }, void 0, false, { fileName: _jsxFileName, lineNumber: 22, columnNumber: 13 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 20, columnNumber: 17 }, this));
        } }), void 0, false, { fileName: _jsxFileName, lineNumber: 17, columnNumber: 11 }, this));
};
exports.InputDatePicker = InputDatePicker;
//# sourceMappingURL=index.js.map