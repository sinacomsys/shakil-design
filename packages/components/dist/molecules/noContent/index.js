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
exports.NoContent = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/noContent/index.tsx";
var atoms_1 = require("../../atoms");
var theme_1 = require("../../theme");
var style_1 = require("./style");
var NoContent = function (_a) {
    var text = _a.text;
    var classes = (0, style_1.useStyles)();
    var noContent = (0, theme_1.useTheme)().noContent;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["noContent"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { wrapperClassName: classes["icon"], size: { height: 107, width: 91 }, name: "Shelf-View-_-Traffic-Cone" }, void 0, false, { fileName: _jsxFileName, lineNumber: 14, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ color: noContent, size: 16 }, { children: text }), void 0, false, { fileName: _jsxFileName, lineNumber: 19, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 12, columnNumber: 11 }, _this));
};
exports.NoContent = NoContent;
//# sourceMappingURL=index.js.map