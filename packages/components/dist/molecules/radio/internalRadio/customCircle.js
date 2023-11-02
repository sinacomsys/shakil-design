define(["require", "exports", "react/jsx-dev-runtime", "usehooks-ts", "@shakil-design/utils", "./style"], function (require, exports, jsx_dev_runtime_1, usehooks_ts_1, utils_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomCircle = void 0;
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/radio/internalRadio/customCircle.tsx";
    const CustomCircle = ({ borderColor, backgroundColor, unit }) => {
        const classes = (0, style_1.useStyles)();
        const { height: windowHeight } = (0, usehooks_ts_1.useWindowSize)();
        const vh = windowHeight / 100;
        const outterCircleWidth = unit === "viewport" ? 2 * Math.round(((0, utils_1.pxToVh)(16) * vh) / 2) : 16;
        const innerCircleWidth = unit === "viewport" ? 2 * Math.round(((0, utils_1.pxToVh)(10) * vh) / 2) : 10;
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["outterCircle"], style: {
                border: `1px solid ${borderColor}`,
                width: outterCircleWidth,
                height: outterCircleWidth,
            } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", { className: classes["innerCircle"], style: {
                    backgroundColor: backgroundColor,
                    width: innerCircleWidth,
                    height: innerCircleWidth,
                } }, void 0, false, { fileName: _jsxFileName, lineNumber: 30, columnNumber: 7 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 11 }, this));
    };
    exports.CustomCircle = CustomCircle;
});
//# sourceMappingURL=customCircle.js.map