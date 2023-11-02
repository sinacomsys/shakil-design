define(["require", "exports", "react/jsx-dev-runtime", "@shakil-design/utils", "../../theme", "./style"], function (require, exports, jsx_dev_runtime_1, utils_1, theme_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Spinner = void 0;
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/atoms/spinner/index.tsx";
    const SMALL_BORDER = 1;
    const MEDIUM_BORDER = 2;
    const LARGE_BORDER = 2;
    const SMALL = 15;
    const MEDIUM = 20;
    const LARGE = 30;
    const Spinner = ({ spinerColor = theme_1.Colors.primary, size, unit = "viewport", }) => {
        const { primary } = (0, theme_1.useTheme)();
        const classes = (0, style_1.useStyle)();
        const borderStyle = spinerColor
            ? `${spinerColor} transparent transparent transparent`
            : `${primary} transparent transparent transparent`;
        const borderWidth = size === "small"
            ? SMALL_BORDER
            : size === "medium"
                ? MEDIUM_BORDER
                : size === "large"
                    ? LARGE_BORDER
                    : MEDIUM_BORDER;
        const width = size === "small"
            ? SMALL
            : size === "medium"
                ? MEDIUM
                : size === "large"
                    ? LARGE
                    : MEDIUM;
        const _width = unit === "viewport" ? `${(0, utils_1.pxToVh)(width)}vh` : width;
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { width: _width, height: _width }, className: classes.ldsRing }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", { style: {
                        borderColor: borderStyle,
                        borderWidth: borderWidth,
                        width: _width,
                        height: _width,
                    } }, void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", { style: {
                        borderColor: borderStyle,
                        borderWidth: borderWidth,
                        width: _width,
                        height: _width,
                    } }, void 0, false, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", { style: {
                        borderColor: borderStyle,
                        borderWidth: borderWidth,
                        width: _width,
                        height: _width,
                    } }, void 0, false, { fileName: _jsxFileName, lineNumber: 68, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", { style: {
                        borderColor: borderStyle,
                        borderWidth: borderWidth,
                        width: _width,
                        height: _width,
                    } }, void 0, false, { fileName: _jsxFileName, lineNumber: 76, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 50, columnNumber: 11 }, this));
    };
    exports.Spinner = Spinner;
});
//# sourceMappingURL=index.js.map