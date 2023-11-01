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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tabs/internalTabPane.tsx";
import { pxToVh } from "@shakil-design/utils";
import classNames from "classnames";
import { BaseIcon, Text } from "../../atoms";
import { useTheme } from "../../theme";
import { useStyles } from "./style";
function InternalTabPane(_a) {
    var id = _a.id, renderTitle = _a.renderTitle, closable = _a.closable, onClick = _a.onClick, isActive = _a.isActive, onClose = _a.onClose;
    var classes = useStyles();
    var _b = useTheme().tab, _c = _b === void 0 ? {} : _b, textColor = _c.textColor;
    return (_jsxDEV("div", __assign({ onClick: function (e) {
            e.preventDefault();
            onClick(id);
        }, className: classNames(classes["tab"], isActive && classes["tabActive"]) }, { children: [_jsxDEV("div", __assign({ className: classes["tabsTitleWrapper"] }, { children: typeof renderTitle === "string" ? (_jsxDEV(Text, __assign({ size: 14, theme: "Regular", color: textColor }, { children: renderTitle }), void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 45 }, this)) : typeof renderTitle === "function" ? (renderTitle({ id: id, isActive: isActive })) : null }), void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 7 }, this), closable && (_jsxDEV(BaseIcon, { wrapperStyle: {
                    width: 16,
                }, color: "#575757", name: "Table-_-Cross-Icon-for-erasing-all-of-filters", size: { height: pxToVh(10), width: pxToVh(10) }, unit: "viewport", onClick: function (event) {
                    event.stopPropagation();
                    onClose === null || onClose === void 0 ? void 0 : onClose(id);
                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 21 }, this))] }), id, true, { fileName: _jsxFileName, lineNumber: 29, columnNumber: 11 }, this));
}
export { InternalTabPane };
//# sourceMappingURL=internalTabPane.js.map