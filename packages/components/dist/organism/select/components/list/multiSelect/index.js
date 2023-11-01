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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/components/list/multiSelect/index.tsx";
import { ScrollView } from "../../../../../atoms";
import { Option } from "../../option";
import { theming } from "../../../../../theme";
var useTheme = theming.useTheme;
var MultiSelectList = function (_a) {
    var _b;
    var data = _a.data, labelExtractor = _a.labelExtractor, valueExtractor = _a.valueExtractor, onClick = _a.onClick, internalValue = _a.internalValue;
    var disableText = useTheme().disableText;
    var isNotSelectedItems = data.filter(function (item) {
        var _a;
        return !((_a = (internalValue || [])) === null || _a === void 0 ? void 0 : _a.find(function (_item) {
            return (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)) === _item;
        }));
    });
    return (_jsxDEV(ScrollView, __assign({ style: { flex: 1 } }, { children: [(_b = (internalValue || [])) === null || _b === void 0 ? void 0 : _b.map(function (item) {
                var selectedItem = data.find(function (_item) { return (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(_item)) === item; });
                return (_jsxDEV(Option, __assign({ multiple: true, isSelected: true, value: {
                        label: item,
                        value: item,
                    }, onClick: onClick }, { children: selectedItem && (labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(selectedItem)) }), item, false, { fileName: _jsxFileName, lineNumber: 30, columnNumber: 17 }, _this));
            }), (internalValue || []).length ? (_jsxDEV("div", { style: { height: 1, backgroundColor: disableText } }, void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 53 }, _this)) : null, isNotSelectedItems.map(function (item) {
                var isSelected = Array.isArray(internalValue) &&
                    Boolean(internalValue.find(function (_item) { return _item === (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)); }));
                return (_jsxDEV(Option, __assign({ multiple: true, isSelected: isSelected, value: {
                        label: (labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(item)) || "",
                        value: valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item),
                    }, onClick: onClick }, { children: labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(item) }), valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item), false, { fileName: _jsxFileName, lineNumber: 57, columnNumber: 17 }, _this));
            })] }), void 0, true, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 11 }, _this));
};
export { MultiSelectList };
//# sourceMappingURL=index.js.map