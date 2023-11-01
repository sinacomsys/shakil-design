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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/scrollView/index.tsx";
import React from "react";
import { useStyles } from "./style";
import classnames from "classnames";
var ScrollView = React.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, style = _a.style;
    var classes = useStyles();
    return (_jsxDEV("div", __assign({ ref: ref, style: __assign({}, style), className: classnames(className, classes.container) }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 14, columnNumber: 13 }, _this));
});
ScrollView.displayName = "ScrollView";
export { ScrollView };
//# sourceMappingURL=index.js.map