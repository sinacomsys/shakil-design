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
exports.SingleSelect = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var singleSelectList_1 = require("../list/singleSelectList");
var selectTemplate_1 = require("../selectTemplate");
var SingleSelect = function (_a) {
    var _b = _a.valueExtractor, valueExtractor = _b === void 0 ? function (item) { return item.value; } : _b, _c = _a.labelExtractor, labelExtractor = _c === void 0 ? function (item) { return item.label; } : _c, data = _a.data, value = _a.value, onChange = _a.onChange, onClear = _a.onClear, onFilter = _a.onFilter, props = __rest(_a, ["valueExtractor", "labelExtractor", "data", "value", "onChange", "onClear", "onFilter"]);
    var _d = (0, react_1.useState)(undefined), selectedItem = _d[0], setSelectedItem = _d[1];
    (0, react_1.useEffect)(function () {
        setSelectedItem(value);
    }, [value]);
    var handleOnChange = function (selectedItemValue) {
        !value && setSelectedItem(selectedItemValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(selectedItemValue);
    };
    var _value = data.find(function (item) { return (valueExtractor === null || valueExtractor === void 0 ? void 0 : valueExtractor(item)) === selectedItem; });
    var displayValue = _value ? labelExtractor === null || labelExtractor === void 0 ? void 0 : labelExtractor(_value) : "";
    return ((0, jsx_runtime_1.jsx)(selectTemplate_1.Template, __assign({}, props, { displayValue: displayValue || "", data: data, onClear: onClear, labelExtractor: labelExtractor, renderOverlay: function (_a) {
            var onClose = _a.onClose, filteredData = _a.filteredData;
            return ((0, jsx_runtime_1.jsx)(singleSelectList_1.SingleSelectList, { data: data, filteredData: filteredData, labelExtractor: labelExtractor, valueExtractor: valueExtractor, selectedItem: selectedItem, onClick: function (value) {
                    handleOnChange(value);
                    onClose();
                } }));
        } })));
};
exports.SingleSelect = SingleSelect;
//# sourceMappingURL=index.js.map