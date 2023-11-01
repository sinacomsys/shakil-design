"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelectList = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/components/list/multiSelect/index.tsx";
const atoms_1 = require("../../../../../atoms");
const option_1 = require("../../option");
const theme_1 = require("../../../../../theme");
const { useTheme } = theme_1.theming;
const MultiSelectList = ({ data, labelExtractor, valueExtractor, onClick, internalValue, }) => {
    var _a;
    const { disableText } = useTheme();
    const isNotSelectedItems = data.filter((item) => {
        var _a;
        return !((_a = (internalValue || [])) === null || _a === void 0 ? void 0 : _a.find((_item) => {
            return (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)) === _item;
        }));
    });
    return ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.ScrollView, Object.assign({ style: { flex: 1 } }, { children: [(_a = (internalValue || [])) === null || _a === void 0 ? void 0 : _a.map((item) => {
                const selectedItem = data.find((_item) => (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(_item)) === item);
                return ((0, jsx_dev_runtime_1.jsxDEV)(option_1.Option, Object.assign({ multiple: true, isSelected: true, value: {
                        label: item,
                        value: item,
                    }, onClick: onClick }, { children: selectedItem && (labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(selectedItem)) }), item, false, { fileName: _jsxFileName, lineNumber: 30, columnNumber: 17 }, this));
            }), (internalValue || []).length ? ((0, jsx_dev_runtime_1.jsxDEV)("div", { style: { height: 1, backgroundColor: disableText } }, void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 53 }, this)) : null, isNotSelectedItems.map((item) => {
                const isSelected = Array.isArray(internalValue) &&
                    Boolean(internalValue.find((_item) => _item === (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item))));
                return ((0, jsx_dev_runtime_1.jsxDEV)(option_1.Option, Object.assign({ multiple: true, isSelected: isSelected, value: {
                        label: (labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(item)) || "",
                        value: valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item),
                    }, onClick: onClick }, { children: labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(item) }), valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item), false, { fileName: _jsxFileName, lineNumber: 57, columnNumber: 17 }, this));
            })] }), void 0, true, { fileName: _jsxFileName, lineNumber: 24, columnNumber: 11 }, this));
};
exports.MultiSelectList = MultiSelectList;
//# sourceMappingURL=index.js.map