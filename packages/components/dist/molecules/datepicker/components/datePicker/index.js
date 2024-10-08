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
exports.DatePicker = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var datePickerPanel_1 = require("../datePickerPanel");
var datePickerProvider_1 = require("../datePickerProvider");
var wrapperTemplate_1 = require("../wrapperTemplate");
var DatePicker = function (_a) {
    var onChange = _a.onChange, testid = _a.testid, rest = __rest(_a, ["onChange", "testid"]);
    return ((0, jsx_runtime_1.jsx)(datePickerProvider_1.DatePickerProvider, __assign({}, rest, { children: function (_a) {
            var value = _a.value, disable = _a.disable, onGoToday = _a.onGoToday;
            return ((0, jsx_runtime_1.jsx)(wrapperTemplate_1.WrapperTemplate, __assign({ testid: testid, disable: disable, onFinalConfirm: function () {
                    onChange === null || onChange === void 0 ? void 0 : onChange({ value: value });
                }, onGoToday: onGoToday }, { children: (0, jsx_runtime_1.jsx)(datePickerPanel_1.DatePickerPanel, {}) })));
        } })));
};
exports.DatePicker = DatePicker;
//# sourceMappingURL=index.js.map