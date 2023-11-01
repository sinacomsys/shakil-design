"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleshIcon = void 0;
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/components/fleshIcon/index.tsx";
const framer_motion_1 = require("framer-motion");
const atoms_1 = require("../../../../atoms");
const theme_1 = require("../../../../theme");
const utils_1 = require("@shakil-design/utils");
const FleshIcon = ({ isVisible }) => {
    const { select: { fleshIcon } = {} } = (0, theme_1.useTheme)();
    return ((0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, Object.assign({ animate: { rotate: isVisible ? 180 : 0 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { color: fleshIcon, name: "Every-Boxes-_-Flesh-Icon-for-more-choices", size: { height: (0, utils_1.pxToVh)(7), width: (0, utils_1.pxToVh)(12) }, unit: "viewport" }, void 0, false, { fileName: _jsxFileName, lineNumber: 11, columnNumber: 7 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 9, columnNumber: 11 }, this));
};
exports.FleshIcon = FleshIcon;
//# sourceMappingURL=index.js.map