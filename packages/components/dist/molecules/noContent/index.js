"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoContent = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/noContent/index.tsx";
const atoms_1 = require("../../atoms");
const theme_1 = require("../../theme");
const utils_1 = require("@shakil-design/utils");
const style_1 = require("./style");
const NoContent = ({ text }) => {
    const classes = (0, style_1.useStyles)();
    const { noContent } = (0, theme_1.useTheme)();
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["noContent"] }, { children: [(0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { wrapperStyle: { marginBottom: 10 }, size: { height: (0, utils_1.pxToVh)(107), width: (0, utils_1.pxToVh)(91) }, name: "Shelf-View-_-Traffic-Cone", unit: "viewport" }, void 0, false, { fileName: _jsxFileName, lineNumber: 15, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, Object.assign({ color: noContent, size: 16 }, { children: text }), void 0, false, { fileName: _jsxFileName, lineNumber: 21, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 13, columnNumber: 11 }, this));
};
exports.NoContent = NoContent;
//# sourceMappingURL=index.js.map