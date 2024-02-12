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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelect = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/components/multiSelect/index.tsx";
var multiSelectList_1 = require("../list/multiSelectList");
var selectTemplate_1 = require("../selectTemplate");
var src_1 = require("@shakil-design/utils/src");
var MultiSelect = function (_a) {
    var onChange = _a.onChange, value = _a.value, data = _a.data, _b = _a.valueExtractor, valueExtractor = _b === void 0 ? function (item) { return item.value; } : _b, _c = _a.labelExtractor, labelExtractor = _c === void 0 ? function (item) { return item.label; } : _c, onClear = _a.onClear, props = __rest(_a, ["onChange", "value", "data", "valueExtractor", "labelExtractor", "onClear"]);
    var handleOnChange = function (selectedItemValue) {
        var alreadyExist = value === null || value === void 0 ? void 0 : value.find(function (item) { return item === selectedItemValue; });
        if (!(0, src_1.isNullish)(alreadyExist)) {
            var items = (value || []).filter(function (item) {
                return item !== selectedItemValue;
            });
            onChange === null || onChange === void 0 ? void 0 : onChange(items);
        }
        else {
            onChange === null || onChange === void 0 ? void 0 : onChange(__spreadArray(__spreadArray([], (value || []), true), [selectedItemValue], false));
        }
    };
    var displayValue = (value || []).length
        ? "".concat(value === null || value === void 0 ? void 0 : value.length, " Items Selected")
        : "";
    var handleOnClear = function () {
        onClear === null || onClear === void 0 ? void 0 : onClear();
        onChange === null || onChange === void 0 ? void 0 : onChange(null);
    };
    return ((0, jsx_dev_runtime_1.jsxDEV)(selectTemplate_1.Template, __assign({}, props, { onClear: handleOnClear, displayValue: displayValue, data: data, labelExtractor: labelExtractor, renderOverlay: function (_a) {
            var filteredData = _a.filteredData;
            return ((0, jsx_dev_runtime_1.jsxDEV)(multiSelectList_1.MultiSelectList, { labelExtractor: labelExtractor, valueExtractor: valueExtractor, value: value || [], onClick: handleOnChange, rawData: data, filteredData: filteredData }, void 0, false, { fileName: _jsxFileName, lineNumber: 54, columnNumber: 17 }, _this));
        } }), void 0, false, { fileName: _jsxFileName, lineNumber: 46, columnNumber: 11 }, _this));
};
exports.MultiSelect = MultiSelect;
//# sourceMappingURL=index.js.map