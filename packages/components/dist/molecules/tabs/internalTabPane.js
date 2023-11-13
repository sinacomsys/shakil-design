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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalTabPane = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tabs/internalTabPane.tsx";
var classnames_1 = __importDefault(require("classnames"));
var atoms_1 = require("../../atoms");
var theme_1 = require("../../theme");
var style_1 = require("./style");
function InternalTabPane(_a) {
    var id = _a.id, renderTitle = _a.renderTitle, closable = _a.closable, onClick = _a.onClick, isActive = _a.isActive, onClose = _a.onClose;
    var classes = (0, style_1.useStyles)();
    var _b = (0, theme_1.useTheme)().tab, _c = _b === void 0 ? {} : _b, textColor = _c.textColor;
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ onClick: function (e) {
            e.preventDefault();
            onClick(id);
        }, className: (0, classnames_1.default)(classes["tab"], isActive && classes["active-tab-pane"]) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["tab-pane-title"] }, { children: typeof renderTitle === "string" ? ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ size: 14, theme: "Regular", color: textColor }, { children: renderTitle }), void 0, false, { fileName: _jsxFileName, lineNumber: 41, columnNumber: 45 }, this)) : typeof renderTitle === "function" ? (renderTitle({ id: id, isActive: isActive })) : null }), void 0, false, { fileName: _jsxFileName, lineNumber: 40, columnNumber: 7 }, this), closable && ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { wrapperClassName: classes["tab-pane-close"], color: "#575757", name: "Table-_-Cross-Icon-for-erasing-all-of-filters", size: { height: 10, width: 10 }, onClick: function (event) {
                    event.stopPropagation();
                    onClose === null || onClose === void 0 ? void 0 : onClose(id);
                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 49, columnNumber: 21 }, this))] }), id, true, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 11 }, this));
}
exports.InternalTabPane = InternalTabPane;
//# sourceMappingURL=internalTabPane.js.map