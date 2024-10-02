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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "F:/shakil-design/packages/components/src/molecules/tree/item/index.tsx";
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var style_1 = require("./style");
var treeProvider_1 = require("../context/treeProvider");
var types_1 = require("../../../types");
var defaultNode_1 = require("./defaultNode");
var Item = function (_a, ref) {
    var onClick = _a.onClick, level = _a.level, data = _a.data, isLoading = _a.isLoading, fontSize = _a.fontSize, isActive = _a.isActive, arrowDirection = _a.arrowDirection, title = _a.title;
    var classes = (0, style_1.useStyle)();
    var unit = (0, react_1.useContext)(treeProvider_1.TreeContext).unit;
    var isLevelUpperOne = level && level > 1;
    var isPXunit = unit === "pixel";
    var isViewPortUnit = unit === "viewport";
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ ref: ref, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, className: (0, classnames_1.default)(classes["wrapper"], isViewPortUnit && "".concat(classes["wrapper"]).concat(types_1.VIEW_PORT_UNIT), isPXunit && "".concat(classes["wrapper"]).concat(types_1.PX_UNIT), isLevelUpperOne && classes["dot-line"], isLevelUpperOne && isPXunit && "".concat(classes["dot-line"]).concat(types_1.PX_UNIT), isLevelUpperOne &&
            isViewPortUnit &&
            "".concat(classes["dot-line"]).concat(types_1.VIEW_PORT_UNIT)) }, { children: typeof data.renderItemContent === "function" ? (data.renderItemContent({ data: data, level: level })) : ((0, jsx_dev_runtime_1.jsxDEV)(defaultNode_1.DefaultNode, __assign({}, {
            fontSize: fontSize,
            isActive: isActive,
            arrowDirection: arrowDirection,
            title: title,
            data: data,
            level: level,
            isLoading: isLoading,
        }), void 0, false, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 12 }, _this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 11 }, _this));
};
var RefWrapper = react_1.default.forwardRef(Item);
exports.Item = RefWrapper;
//# sourceMappingURL=index.js.map