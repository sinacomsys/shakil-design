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
exports.NoData = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/components/list/noData/index.tsx";
var style_1 = require("./style");
var atoms_1 = require("../../../../../atoms");
var theme_1 = require("../../../../../theme");
var useTheme = theme_1.theming.useTheme;
var NoData = function () {
    var classes = (0, style_1.useStyles)();
    var primary = useTheme().primary;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["no-data"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ color: primary }, { children: "No Data!" }), void 0, false, { fileName: _jsxFileName, lineNumber: 11, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 9, columnNumber: 11 }, _this));
};
exports.NoData = NoData;
//# sourceMappingURL=index.js.map