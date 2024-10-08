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
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var atoms_1 = require("../../atoms");
var theme_1 = require("../../theme");
var style_1 = require("./style");
function InternalTabPane(_a) {
    var id = _a.id, renderTitle = _a.renderTitle, onClick = _a.onClick, isActive = _a.isActive, onClose = _a.onClose, closeable = _a.closeable;
    var classes = (0, style_1.useStyles)();
    var _b = (0, theme_1.useTheme)().tab, _c = _b === void 0 ? {} : _b, textColor = _c.textColor;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ onClick: function (e) {
            e.preventDefault();
            onClick(id);
        }, className: (0, classnames_1.default)(classes["tab"], isActive && classes["active-tab-pane"]) }, { children: [(0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: typeof renderTitle === "string" ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: classes["tab-pane-title"] }, { children: (0, jsx_runtime_1.jsx)(atoms_1.Text, __assign({ size: 14, theme: "Regular", color: textColor }, { children: renderTitle })) }))) : typeof renderTitle === "function" ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: classes["rendered-title-wrap"] }, { children: renderTitle({ id: id, isActive: isActive }) }))) : null }), !!closeable && ((0, jsx_runtime_1.jsx)("div", __assign({ className: classes["tab-pane-close"] }, { children: (0, jsx_runtime_1.jsx)(atoms_1.BaseIcon, { color: "#575757", name: "Table-_-Cross-Icon-for-erasing-all-of-filters", size: { height: 10, width: 10 }, onClick: function (event) {
                        event.stopPropagation();
                        onClose === null || onClose === void 0 ? void 0 : onClose(id);
                    } }) })))] }), id));
}
exports.InternalTabPane = InternalTabPane;
//# sourceMappingURL=internalTabPane.js.map