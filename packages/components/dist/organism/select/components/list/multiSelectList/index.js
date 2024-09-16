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
exports.MultiSelectList = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design/packages/components/src/organism/select/components/list/multiSelectList/index.tsx";
var atoms_1 = require("../../../../../atoms");
var option_1 = require("../../option");
var theme_1 = require("../../../../../theme");
var src_1 = require("@shakil-design/utils/src");
var noData_1 = require("../noData");
var useTheme = theme_1.theming.useTheme;
var MultiSelectList = function (_a) {
    var _b;
    var rawData = _a.rawData, labelExtractor = _a.labelExtractor, valueExtractor = _a.valueExtractor, onClick = _a.onClick, value = _a.value, filteredData = _a.filteredData;
    var disableText = useTheme().disableText;
    var isNotSelectedItems = filteredData.filter(function (item) {
        var isSelected = value === null || value === void 0 ? void 0 : value.find(function (_item) {
            return (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)) === _item;
        });
        return (0, src_1.isNullish)(isSelected);
    });
    return ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.ScrollView, __assign({ style: { flex: 1 } }, { children: [(_b = (value || [])) === null || _b === void 0 ? void 0 : _b.map(function (item, index) {
                var selectedItem = rawData.find(function (_item) { return (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(_item)) === item; });
                return ((0, jsx_dev_runtime_1.jsxDEV)(option_1.Option, __assign({ multiple: true, isSelected: true, onClick: function () {
                        onClick(item);
                    } }, { children: selectedItem && (labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(selectedItem)) }), index, false, { fileName: _jsxFileName, lineNumber: 40, columnNumber: 17 }, _this));
            }), (value || []).length ? ((0, jsx_dev_runtime_1.jsxDEV)("div", { style: { height: 1, backgroundColor: disableText } }, void 0, false, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 32 }, _this)) : null, !isNotSelectedItems || isNotSelectedItems.length === 0 ? ((0, jsx_dev_runtime_1.jsxDEV)(noData_1.NoData, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 58, columnNumber: 66 }, _this)) : (isNotSelectedItems.map(function (item, index) {
                var isSelected = Array.isArray(value) &&
                    Boolean(value.find(function (_item) { return _item === (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)); }));
                return ((0, jsx_dev_runtime_1.jsxDEV)(option_1.Option, __assign({ multiple: true, isSelected: isSelected, onClick: function () {
                        valueExtractor && onClick(valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item));
                    } }, { children: labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(item) }), index, false, { fileName: _jsxFileName, lineNumber: 66, columnNumber: 19 }, _this));
            }))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 34, columnNumber: 11 }, _this));
};
exports.MultiSelectList = MultiSelectList;
//# sourceMappingURL=index.js.map