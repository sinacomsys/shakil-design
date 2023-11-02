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
define(["require", "exports", "react/jsx-dev-runtime", "classnames", "react", "./style", "../context/treeProvider", "../../../types", "./defaultNode"], function (require, exports, jsx_dev_runtime_1, classnames_1, react_1, style_1, treeProvider_1, types_1, defaultNode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Item = void 0;
    classnames_1 = __importDefault(classnames_1);
    react_1 = __importStar(react_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tree/item/index.tsx";
    const Item = ({ onClick, level, data, isLoading, fontSize, isActive, arrowDirection, title, }, ref) => {
        const classes = (0, style_1.useStyle)();
        const { unit } = (0, react_1.useContext)(treeProvider_1.TreeContext);
        const isLevelUpperOne = level && level > 1;
        const isPXunit = unit === "pixel";
        const isViewPortUnit = unit === "viewport";
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ ref: ref, onClick: () => onClick === null || onClick === void 0 ? void 0 : onClick(), className: (0, classnames_1.default)(classes["wrapper"], isViewPortUnit && `${classes["wrapper"]}${types_1.VIEW_PORT_UNIT}`, isPXunit && `${classes["wrapper"]}${types_1.PX_UNIT}`, isLevelUpperOne && classes["dot-line"], isLevelUpperOne && isPXunit && `${classes["dot-line"]}${types_1.PX_UNIT}`, isLevelUpperOne &&
                isViewPortUnit &&
                `${classes["dot-line"]}${types_1.VIEW_PORT_UNIT}`) }, { children: typeof data.renderItemContent === "function" ? (data.renderItemContent({ data, level })) : ((0, jsx_dev_runtime_1.jsxDEV)(defaultNode_1.DefaultNode, Object.assign({}, {
                fontSize,
                isActive,
                arrowDirection,
                title,
                data,
                level,
                isLoading,
            }), void 0, false, { fileName: _jsxFileName, lineNumber: 45, columnNumber: 12 }, this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 28, columnNumber: 11 }, this));
    };
    const RefWrapper = react_1.default.forwardRef(Item);
    exports.Item = RefWrapper;
});
//# sourceMappingURL=index.js.map