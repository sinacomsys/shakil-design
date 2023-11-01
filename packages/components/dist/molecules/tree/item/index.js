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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tree/item/index.tsx";
import classNames from "classnames";
import React, { useContext } from "react";
import { useStyle } from "./style";
import { TreeContext } from "../context/treeProvider";
import { PX_UNIT, VIEW_PORT_UNIT } from "../../../types";
import { DefaultNode } from "./defaultNode";
var Item = function (_a, ref) {
    var onClick = _a.onClick, level = _a.level, data = _a.data, isLoading = _a.isLoading, fontSize = _a.fontSize, isActive = _a.isActive, arrowDirection = _a.arrowDirection, title = _a.title;
    var classes = useStyle();
    var unit = useContext(TreeContext).unit;
    var isLevelUpperOne = level && level > 1;
    var isPXunit = unit === "pixel";
    var isViewPortUnit = unit === "viewport";
    return (_jsxDEV("div", __assign({ ref: ref, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, className: classNames(classes["wrapper"], isViewPortUnit && "".concat(classes["wrapper"]).concat(VIEW_PORT_UNIT), isPXunit && "".concat(classes["wrapper"]).concat(PX_UNIT), isLevelUpperOne && classes["dot-line"], isLevelUpperOne && isPXunit && "".concat(classes["dot-line"]).concat(PX_UNIT), isLevelUpperOne &&
            isViewPortUnit &&
            "".concat(classes["dot-line"]).concat(VIEW_PORT_UNIT)) }, { children: typeof data.renderItemContent === "function" ? (data.renderItemContent({ data: data, level: level })) : (_jsxDEV(DefaultNode, __assign({}, {
            fontSize: fontSize,
            isActive: isActive,
            arrowDirection: arrowDirection,
            title: title,
            data: data,
            level: level,
            isLoading: isLoading,
        }), void 0, false, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 12 }, _this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 11 }, _this));
};
var RefWrapper = React.forwardRef(Item);
export { RefWrapper as Item };
//# sourceMappingURL=index.js.map