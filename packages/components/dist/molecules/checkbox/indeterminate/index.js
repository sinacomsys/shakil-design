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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/checkbox/indeterminate/index.tsx";
import { useWindowSize } from "usehooks-ts";
import { pxToVh } from "@shakil-design/utils";
import { WIDTH } from "../customSquare";
import { useStyles } from "./style";
var indeterminate = 6;
var Indeterminate = function (_a) {
    var unit = _a.unit;
    var classes = useStyles();
    var windowHeight = useWindowSize().height;
    var vh = windowHeight / 100;
    var width = unit === "pixel" ? WIDTH : 2 * Math.round((pxToVh(WIDTH) * vh) / 2);
    var smallSquareWidth = unit === "pixel"
        ? indeterminate
        : 2 * Math.round((pxToVh(indeterminate) * vh) / 2);
    return (_jsxDEV("div", __assign({ className: classes["wrapper"], style: {
            width: width,
            height: width,
        } }, { children: _jsxDEV("div", { className: classes["square"], style: {
                width: smallSquareWidth,
                height: smallSquareWidth,
            } }, void 0, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 27, columnNumber: 11 }, _this));
};
export { Indeterminate };
//# sourceMappingURL=index.js.map