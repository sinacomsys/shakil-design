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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/components/list/singleSelect/index.tsx";
import { Option } from "../../option";
import { ScrollView, Text } from "../../../../../atoms";
import { Radio } from "../../../../../molecules";
import { theming } from "../../../../../theme";
var useTheme = theming.useTheme;
export var SingleSelectList = function (_a) {
    var data = _a.data, onClick = _a.onClick, labelExtractor = _a.labelExtractor, internalValue = _a.internalValue, valueExtractor = _a.valueExtractor;
    var disableText = useTheme().disableText;
    var selectedItem = data.find(function (item) {
        return (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)) === internalValue;
    });
    return (_jsxDEV(ScrollView, __assign({ style: { flex: 1 } }, { children: [internalValue ? (_jsxDEV("div", __assign({ style: { marginInlineStart: 20 } }, { children: _jsxDEV(Radio, __assign({ unit: "pixel", value: "test", checked: true }, { children: _jsxDEV(Text, __assign({ size: 16, theme: "Regular", color: "#575757" }, { children: selectedItem && (labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(selectedItem)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 26, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 25, columnNumber: 11 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 25 }, _this)) : null, internalValue ? (_jsxDEV("div", { style: { height: 1, backgroundColor: disableText } }, void 0, false, { fileName: _jsxFileName, lineNumber: 32, columnNumber: 25 }, _this)) : null, data
                .filter(function (item) { return (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)) !== internalValue; })
                .map(function (item) {
                var isSelected = internalValue === (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item));
                return (_jsxDEV(Option, __assign({ multiple: false, isSelected: isSelected, value: {
                        label: (labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(item)) || "",
                        value: valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item),
                    }, onClick: onClick }, { children: labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(item) }), valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item), false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 19 }, _this));
            })] }), void 0, true, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 11 }, _this));
};
//# sourceMappingURL=index.js.map