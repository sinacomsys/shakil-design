"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleSelectList = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/components/list/singleSelect/index.tsx";
const option_1 = require("../../option");
const atoms_1 = require("../../../../../atoms");
const molecules_1 = require("../../../../../molecules");
const theme_1 = require("../../../../../theme");
const { useTheme } = theme_1.theming;
const SingleSelectList = ({ data, onClick, labelExtractor, internalValue, valueExtractor, }) => {
    const { disableText } = useTheme();
    const selectedItem = data.find((item) => {
        return (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)) === internalValue;
    });
    return ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.ScrollView, Object.assign({ style: { flex: 1 } }, { children: [internalValue ? ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { marginInlineStart: 20 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(molecules_1.Radio, Object.assign({ unit: "pixel", value: "test", checked: true }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, Object.assign({ size: 16, theme: "Regular", color: "#575757" }, { children: selectedItem && (labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(selectedItem)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 26, columnNumber: 13 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 25, columnNumber: 11 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 25 }, this)) : null, internalValue ? ((0, jsx_dev_runtime_1.jsxDEV)("div", { style: { height: 1, backgroundColor: disableText } }, void 0, false, { fileName: _jsxFileName, lineNumber: 32, columnNumber: 25 }, this)) : null, data
                .filter((item) => (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)) !== internalValue)
                .map((item) => {
                const isSelected = internalValue === (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item));
                return ((0, jsx_dev_runtime_1.jsxDEV)(option_1.Option, Object.assign({ multiple: false, isSelected: isSelected, value: {
                        label: (labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(item)) || "",
                        value: valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item),
                    }, onClick: onClick }, { children: labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(item) }), valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item), false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 19 }, this));
            })] }), void 0, true, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 11 }, this));
};
exports.SingleSelectList = SingleSelectList;
//# sourceMappingURL=index.js.map