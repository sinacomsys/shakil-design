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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/checkbox/customSquare/index.tsx";
import { useWindowSize } from "usehooks-ts";
import { useTheme } from "../../../theme";
import { pxToVh } from "@shakil-design/utils";
import { useStyles } from "./style";
export var WIDTH = 16;
var INNER_WIDTH = 10;
var CustomSquare = function (_a) {
    var checked = _a.checked, unit = _a.unit;
    var _b = useTheme().checkbox, _c = _b === void 0 ? {} : _b, borderSelected = _c.borderSelected, 
    // deactive,
    squareSelected = _c.squareSelected, unselectedBorder = _c.unselectedBorder, unselectedSquare = _c.unselectedSquare;
    var classes = useStyles();
    var windowHeight = useWindowSize().height;
    var vh = windowHeight / 100;
    var borderColor = checked ? borderSelected : unselectedBorder;
    var backgroundColor = checked ? squareSelected : unselectedSquare;
    var width = unit === "pixel" ? WIDTH : 2 * Math.round((pxToVh(WIDTH) * vh) / 2);
    var innderWidth = unit === "pixel"
        ? INNER_WIDTH
        : 2 * Math.round((pxToVh(INNER_WIDTH) * vh) / 2);
    return (_jsxDEV("div", __assign({ className: classes["wrapper"], style: {
            width: width,
            height: width,
            border: "1px solid ".concat(borderColor),
        } }, { children: _jsxDEV("div", { className: classes["square"], style: {
                width: innderWidth,
                height: innderWidth,
                backgroundColor: backgroundColor,
            } }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 11 }, _this));
};
export { CustomSquare };
//# sourceMappingURL=index.js.map