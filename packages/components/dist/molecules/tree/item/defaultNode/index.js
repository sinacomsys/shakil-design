"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultNode = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tree/item/defaultNode/index.tsx";
const classnames_1 = __importDefault(require("classnames"));
const style_1 = require("./style");
const treeProvider_1 = require("../../context/treeProvider");
const react_1 = require("react");
const atoms_1 = require("../../../../atoms");
const types_1 = require("../../../../types");
const DefaultNode = ({ data, isLoading, level, arrowDirection, fontSize, isActive, title, }) => {
    const classes = (0, style_1.useStyles)();
    const { unit } = (0, react_1.useContext)(treeProvider_1.TreeContext);
    const isPXunit = unit === "pixel";
    const isViewPortUnit = unit === "viewport";
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: {
            backgroundColor: (data === null || data === void 0 ? void 0 : data.renderBackgroundColor) &&
                data.renderBackgroundColor({ data, level }),
        }, className: (0, classnames_1.default)(classes["wrapper"], isPXunit
            ? `${classes["wrapper"]}${types_1.PX_UNIT}`
            : `${classes["wrapper"]}${types_1.VIEW_PORT_UNIT}`, isActive && `${classes["wrapper"]}--active`) }, { children: [data.renderStatusColor && ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: (0, classnames_1.default)(classes["status-line"], isPXunit
                    ? `${classes["status-line"]}${types_1.PX_UNIT}`
                    : `${classes["status-line"]}${types_1.VIEW_PORT_UNIT}`) }, { children: data.renderStatusColor({ data, level }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 35 }, this)), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["item-content"] }, { children: typeof data.renderTitle === "function" ? (data.renderTitle({ data, level })) : ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: (0, classnames_1.default)(classes["default-item-content"], isPXunit && `${classes["default-item-content"]}${types_1.PX_UNIT}`, isViewPortUnit &&
                        `${classes["default-item-content"]}${types_1.VIEW_PORT_UNIT}`) }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, Object.assign({ theme: "Regular", size: fontSize, color: "#575757" }, { children: title }), void 0, false, { fileName: _jsxFileName, lineNumber: 62, columnNumber: 13 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 53, columnNumber: 14 }, this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["spinner-wrapper"] }, { children: [isLoading ? (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Spinner, { size: "small", spinerColor: "white" }, void 0, false, { fileName: _jsxFileName, lineNumber: 69, columnNumber: 21 }, this) : null, !isLoading && arrowDirection !== undefined ? ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { wrapperClassName: (0, classnames_1.default)(classes["arrow-down"], arrowDirection === "up" && classes["arrow-up"]), name: "Amount-Boxes_Decrease", size: { height: 6, width: 12 }, wrapperStyle: { marginInlineStart: "auto" }, color: "#575757" }, void 0, false, { fileName: _jsxFileName, lineNumber: 70, columnNumber: 56 }, this)) : null] }), void 0, true, { fileName: _jsxFileName, lineNumber: 68, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 11 }, this));
};
exports.DefaultNode = DefaultNode;
//# sourceMappingURL=index.js.map