"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSquare = exports.WIDTH = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/checkbox/customSquare/index.tsx";
const usehooks_ts_1 = require("usehooks-ts");
const theme_1 = require("../../../theme");
const utils_1 = require("@shakil-design/utils");
const style_1 = require("./style");
exports.WIDTH = 16;
const INNER_WIDTH = 10;
const CustomSquare = ({ checked, unit }) => {
    const { checkbox: { borderSelected, 
    // deactive,
    squareSelected, unselectedBorder, unselectedSquare, } = {}, } = (0, theme_1.useTheme)();
    const classes = (0, style_1.useStyles)();
    const { height: windowHeight } = (0, usehooks_ts_1.useWindowSize)();
    const vh = windowHeight / 100;
    const borderColor = checked ? borderSelected : unselectedBorder;
    const backgroundColor = checked ? squareSelected : unselectedSquare;
    const width = unit === "pixel" ? exports.WIDTH : 2 * Math.round(((0, utils_1.pxToVh)(exports.WIDTH) * vh) / 2);
    const innderWidth = unit === "pixel"
        ? INNER_WIDTH
        : 2 * Math.round(((0, utils_1.pxToVh)(INNER_WIDTH) * vh) / 2);
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["wrapper"], style: {
            width: width,
            height: width,
            border: `1px solid ${borderColor}`,
        } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", { className: classes["square"], style: {
                width: innderWidth,
                height: innderWidth,
                backgroundColor: backgroundColor,
            } }, void 0, false, { fileName: _jsxFileName, lineNumber: 47, columnNumber: 7 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 11 }, this));
};
exports.CustomSquare = CustomSquare;
//# sourceMappingURL=index.js.map