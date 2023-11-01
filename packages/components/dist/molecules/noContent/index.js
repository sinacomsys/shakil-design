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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/noContent/index.tsx";
import { BaseIcon, Text } from "../../atoms";
import { useTheme } from "../../theme";
import { pxToVh } from "@shakil-design/utils";
import { useStyles } from "./style";
var NoContent = function (_a) {
    var text = _a.text;
    var classes = useStyles();
    var noContent = useTheme().noContent;
    return (_jsxDEV("div", __assign({ className: classes["noContent"] }, { children: [_jsxDEV(BaseIcon, { wrapperStyle: { marginBottom: 10 }, size: { height: pxToVh(107), width: pxToVh(91) }, name: "Shelf-View-_-Traffic-Cone", unit: "viewport" }, void 0, false, { fileName: _jsxFileName, lineNumber: 15, columnNumber: 7 }, _this), _jsxDEV(Text, __assign({ color: noContent, size: 16 }, { children: text }), void 0, false, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 13, columnNumber: 11 }, _this));
};
export { NoContent };
//# sourceMappingURL=index.js.map