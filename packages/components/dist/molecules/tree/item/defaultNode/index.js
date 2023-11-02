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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultNode = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tree/item/defaultNode/index.tsx";
var classnames_1 = __importDefault(require("classnames"));
var style_1 = require("./style");
var treeProvider_1 = require("../../context/treeProvider");
var react_1 = require("react");
var atoms_1 = require("../../../../atoms");
var types_1 = require("../../../../types");
var DefaultNode = function (_a) {
    var data = _a.data, isLoading = _a.isLoading, level = _a.level, arrowDirection = _a.arrowDirection, fontSize = _a.fontSize, isActive = _a.isActive, title = _a.title;
    var classes = (0, style_1.useStyles)();
    var unit = (0, react_1.useContext)(treeProvider_1.TreeContext).unit;
    var isPXunit = unit === "pixel";
    var isViewPortUnit = unit === "viewport";
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: {
            backgroundColor: (data === null || data === void 0 ? void 0 : data.renderBackgroundColor) &&
                data.renderBackgroundColor({ data: data, level: level }),
        }, className: (0, classnames_1.default)(classes["wrapper"], isPXunit
            ? "".concat(classes["wrapper"]).concat(types_1.PX_UNIT)
            : "".concat(classes["wrapper"]).concat(types_1.VIEW_PORT_UNIT), isActive && "".concat(classes["wrapper"], "--active")) }, { children: [data.renderStatusColor && ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)(classes["status-line"], isPXunit
                    ? "".concat(classes["status-line"]).concat(types_1.PX_UNIT)
                    : "".concat(classes["status-line"]).concat(types_1.VIEW_PORT_UNIT)) }, { children: data.renderStatusColor({ data: data, level: level }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 35 }, _this)), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["item-content"] }, { children: typeof data.renderTitle === "function" ? (data.renderTitle({ data: data, level: level })) : ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)(classes["default-item-content"], isPXunit && "".concat(classes["default-item-content"]).concat(types_1.PX_UNIT), isViewPortUnit &&
                        "".concat(classes["default-item-content"]).concat(types_1.VIEW_PORT_UNIT)) }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ theme: "Regular", size: fontSize, color: "#575757" }, { children: title }), void 0, false, { fileName: _jsxFileName, lineNumber: 62, columnNumber: 13 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 14 }, _this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["spinner-wrapper"] }, { children: [isLoading ? (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Spinner, { size: "small", spinerColor: "white" }, void 0, false, { fileName: _jsxFileName, lineNumber: 69, columnNumber: 21 }, _this) : null, !isLoading && arrowDirection !== undefined ? ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { wrapperClassName: (0, classnames_1.default)(classes["arrow-down"], arrowDirection === "up" && classes["arrow-up"]), name: "Amount-Boxes_Decrease", size: { height: 6, width: 12 }, wrapperStyle: { marginInlineStart: "auto" }, color: "#575757" }, void 0, false, { fileName: _jsxFileName, lineNumber: 70, columnNumber: 56 }, _this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 68, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 11 }, _this));
};
exports.DefaultNode = DefaultNode;
//# sourceMappingURL=index.js.map