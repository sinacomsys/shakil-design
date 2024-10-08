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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleSelectList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var option_1 = require("../../option");
var atoms_1 = require("../../../../../atoms");
var molecules_1 = require("../../../../../molecules");
var theme_1 = require("../../../../../theme");
var react_jss_1 = require("react-jss");
var noData_1 = require("../noData");
var useTheme = theme_1.theming.useTheme;
var SingleSelectList = function (_a) {
    var data = _a.data, onClick = _a.onClick, labelExtractor = _a.labelExtractor, selectedItem = _a.selectedItem, valueExtractor = _a.valueExtractor, filteredData = _a.filteredData;
    var disableText = useTheme().disableText;
    var _selectedItem = data.find(function (item) {
        return (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)) === selectedItem;
    });
    var classes = useStyles();
    return ((0, jsx_runtime_1.jsxs)(atoms_1.ScrollView, __assign({ style: { flex: 1 } }, { children: [selectedItem ? ((0, jsx_runtime_1.jsxs)("div", __assign({ className: classes["radio"] }, { children: [(0, jsx_runtime_1.jsx)(molecules_1.Radio, { value: "selected", checked: true }), (0, jsx_runtime_1.jsx)(atoms_1.Text, __assign({ ellipsis: true, size: 16, theme: "Regular", color: "#575757" }, { children: _selectedItem && (labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(_selectedItem)) }))] }))) : null, selectedItem ? ((0, jsx_runtime_1.jsx)("div", { style: { height: 1, backgroundColor: disableText } })) : null, !filteredData || filteredData.length === 0 ? ((0, jsx_runtime_1.jsx)(noData_1.NoData, {})) : (filteredData
                .filter(function (item) { return (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)) !== selectedItem; })
                .map(function (item, index) {
                var isSelected = selectedItem === (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item));
                return ((0, jsx_runtime_1.jsx)(option_1.Option, __assign({ multiple: false, isSelected: isSelected, onClick: function () {
                        valueExtractor && onClick(valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item));
                    } }, { children: labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(item) }), index));
            }))] })));
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