"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indeterminate = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/checkbox/indeterminate/index.tsx";
const usehooks_ts_1 = require("usehooks-ts");
const utils_1 = require("@shakil-design/utils");
const customSquare_1 = require("../customSquare");
const style_1 = require("./style");
const indeterminate = 6;
const Indeterminate = ({ unit }) => {
    const classes = (0, style_1.useStyles)();
    const { height: windowHeight } = (0, usehooks_ts_1.useWindowSize)();
    const vh = windowHeight / 100;
    const width = unit === "pixel" ? customSquare_1.WIDTH : 2 * Math.round(((0, utils_1.pxToVh)(customSquare_1.WIDTH) * vh) / 2);
    const smallSquareWidth = unit === "pixel"
        ? indeterminate
        : 2 * Math.round(((0, utils_1.pxToVh)(indeterminate) * vh) / 2);
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["wrapper"], style: {
            width: width,
            height: width,
        } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", { className: classes["square"], style: {
                width: smallSquareWidth,
                height: smallSquareWidth,
            } }, void 0, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 7 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 27, columnNumber: 11 }, this));
};
exports.Indeterminate = Indeterminate;
//# sourceMappingURL=index.js.map