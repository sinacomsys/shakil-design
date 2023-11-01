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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tree/item/defaultNode/index.tsx";
import classNames from "classnames";
import { useStyles } from "./style";
import { TreeContext } from "../../context/treeProvider";
import { useContext } from "react";
import { BaseIcon, Spinner, Text } from "../../../../atoms";
import { PX_UNIT, VIEW_PORT_UNIT } from "../../../../types";
var DefaultNode = function (_a) {
    var data = _a.data, isLoading = _a.isLoading, level = _a.level, arrowDirection = _a.arrowDirection, fontSize = _a.fontSize, isActive = _a.isActive, title = _a.title;
    var classes = useStyles();
    var unit = useContext(TreeContext).unit;
    var isPXunit = unit === "pixel";
    var isViewPortUnit = unit === "viewport";
    return (_jsxDEV("div", __assign({ style: {
            backgroundColor: (data === null || data === void 0 ? void 0 : data.renderBackgroundColor) &&
                data.renderBackgroundColor({ data: data, level: level }),
        }, className: classNames(classes["wrapper"], isPXunit
            ? "".concat(classes["wrapper"]).concat(PX_UNIT)
            : "".concat(classes["wrapper"]).concat(VIEW_PORT_UNIT), isActive && "".concat(classes["wrapper"], "--active")) }, { children: [data.renderStatusColor && (_jsxDEV("div", __assign({ className: classNames(classes["status-line"], isPXunit
                    ? "".concat(classes["status-line"]).concat(PX_UNIT)
                    : "".concat(classes["status-line"]).concat(VIEW_PORT_UNIT)) }, { children: data.renderStatusColor({ data: data, level: level }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 35 }, _this)), _jsxDEV("div", __assign({ className: classes["item-content"] }, { children: typeof data.renderTitle === "function" ? (data.renderTitle({ data: data, level: level })) : (_jsxDEV("div", __assign({ className: classNames(classes["default-item-content"], isPXunit && "".concat(classes["default-item-content"]).concat(PX_UNIT), isViewPortUnit &&
                        "".concat(classes["default-item-content"]).concat(VIEW_PORT_UNIT)) }, { children: _jsxDEV(Text, __assign({ theme: "Regular", size: fontSize, color: "#575757" }, { children: title }), void 0, false, { fileName: _jsxFileName, lineNumber: 62, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 14 }, _this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 7 }, _this), _jsxDEV("div", __assign({ className: classes["spinner-wrapper"] }, { children: [isLoading ? _jsxDEV(Spinner, { size: "small", spinerColor: "white" }, void 0, false, { fileName: _jsxFileName, lineNumber: 69, columnNumber: 21 }, _this) : null, !isLoading && arrowDirection !== undefined ? (_jsxDEV(BaseIcon, { wrapperClassName: classNames(classes["arrow-down"], arrowDirection === "up" && classes["arrow-up"]), name: "Amount-Boxes_Decrease", size: { height: 6, width: 12 }, wrapperStyle: { marginInlineStart: "auto" }, color: "#575757" }, void 0, false, { fileName: _jsxFileName, lineNumber: 70, columnNumber: 56 }, _this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 68, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 11 }, _this));
};
export { DefaultNode };
//# sourceMappingURL=index.js.map