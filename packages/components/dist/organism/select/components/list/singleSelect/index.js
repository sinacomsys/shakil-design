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
exports.SingleSelectList = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/components/list/singleSelect/index.tsx";
var option_1 = require("../../option");
var atoms_1 = require("../../../../../atoms");
var molecules_1 = require("../../../../../molecules");
var theme_1 = require("../../../../../theme");
var react_jss_1 = require("react-jss");
var useTheme = theme_1.theming.useTheme;
var SingleSelectList = function (_a) {
    var data = _a.data, onClick = _a.onClick, labelExtractor = _a.labelExtractor, internalValue = _a.internalValue, valueExtractor = _a.valueExtractor;
    var disableText = useTheme().disableText;
    var selectedItem = data.find(function (item) {
        return (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)) === internalValue;
    });
    var classes = useStyles();
    return ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.ScrollView, __assign({ style: { flex: 1 } }, { children: [internalValue ? ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["radio"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(molecules_1.Radio, { value: "selected", checked: true }, void 0, false, { fileName: _jsxFileName, lineNumber: 27, columnNumber: 11 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ ellipsis: true, size: 16, theme: "Regular", color: "#575757" }, { children: selectedItem && (labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(selectedItem)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 11 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 25, columnNumber: 25 }, _this)) : null, internalValue ? ((0, jsx_dev_runtime_1.jsxDEV)("div", { style: { height: 1, backgroundColor: disableText } }, void 0, false, { fileName: _jsxFileName, lineNumber: 33, columnNumber: 25 }, _this)) : null, data
                .filter(function (item) { return (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)) !== internalValue; })
                .map(function (item) {
                var isSelected = internalValue === (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item));
                return ((0, jsx_dev_runtime_1.jsxDEV)(option_1.Option, __assign({ multiple: false, isSelected: isSelected, value: {
                        label: (labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(item)) || "",
                        value: valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item),
                    }, onClick: onClick }, { children: labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(item) }), valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item), false, { fileName: _jsxFileName, lineNumber: 40, columnNumber: 19 }, _this));
            })] }), void 0, true, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 11 }, _this));
};
exports.SingleSelectList = SingleSelectList;
var useStyles = (0, react_jss_1.createUseStyles)({
    radio: {
        marginInline: 20,
        display: "flex",
        paddingBlock: 10,
    },
}, { theming: theme_1.theming, name: "singe-select" });
//# sourceMappingURL=index.js.map