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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/datepicker/components/inputDatePicker/index.tsx";
import { BaseIcon, Tooltip } from "../../../../atoms";
import { TextInput } from "../../../../molecules/textInput";
import { DatePickerProvider } from "../datePickerProvider";
import { Panel } from "../panel";
import { theming } from "../../../../theme";
var useTheme = theming.useTheme;
var InputDatePicker = function (props) {
    var Colors = useTheme();
    return (_jsxDEV(DatePickerProvider, __assign({}, props, { children: function (_a) {
            var value = _a.value, onChangeDateInputText = _a.onChangeDateInputText;
            return (_jsxDEV(Tooltip, __assign({ trigger: "click", content: _jsxDEV(Panel, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 45 }, _this) }, { children: _jsxDEV(TextInput, { AddonAfter: _jsxDEV(BaseIcon, { color: Colors.disableText, name: "Table-_-Clock", size: { height: 18, width: 18 }, unit: "pixel" }, void 0, false, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 27 }, _this), onClear: props.onClear, allowClear: props.allowClear, unit: props.unit, value: value, onChangeText: onChangeDateInputText }, void 0, false, { fileName: _jsxFileName, lineNumber: 22, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 20, columnNumber: 17 }, _this));
        } }), void 0, false, { fileName: _jsxFileName, lineNumber: 17, columnNumber: 11 }, _this));
};
export { InputDatePicker };
//# sourceMappingURL=index.js.map