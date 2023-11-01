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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/radio/internalRadio/customCircle.tsx";
import { useWindowSize } from "usehooks-ts";
import { pxToVh } from "@shakil-design/utils";
import { useStyles } from "./style";
var CustomCircle = function (_a) {
    var borderColor = _a.borderColor, backgroundColor = _a.backgroundColor, unit = _a.unit;
    var classes = useStyles();
    var windowHeight = useWindowSize().height;
    var vh = windowHeight / 100;
    var outterCircleWidth = unit === "viewport" ? 2 * Math.round((pxToVh(16) * vh) / 2) : 16;
    var innerCircleWidth = unit === "viewport" ? 2 * Math.round((pxToVh(10) * vh) / 2) : 10;
    return (_jsxDEV("div", __assign({ className: classes["outterCircle"], style: {
            border: "1px solid ".concat(borderColor),
            width: outterCircleWidth,
            height: outterCircleWidth,
        } }, { children: _jsxDEV("div", { className: classes["innerCircle"], style: {
                backgroundColor: backgroundColor,
                width: innerCircleWidth,
                height: innerCircleWidth,
            } }, void 0, false, { fileName: _jsxFileName, lineNumber: 30, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 11 }, _this));
};
export { CustomCircle };
//# sourceMappingURL=customCircle.js.map