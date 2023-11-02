define(["require", "exports", "react/jsx-dev-runtime", "framer-motion", "../../../../atoms", "../../../../theme", "@shakil-design/utils"], function (require, exports, jsx_dev_runtime_1, framer_motion_1, atoms_1, theme_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FleshIcon = void 0;
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/components/fleshIcon/index.tsx";
    const FleshIcon = ({ isVisible }) => {
        const { select: { fleshIcon } = {} } = (0, theme_1.useTheme)();
        return ((0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, Object.assign({ animate: { rotate: isVisible ? 180 : 0 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { color: fleshIcon, name: "Every-Boxes-_-Flesh-Icon-for-more-choices", size: { height: (0, utils_1.pxToVh)(7), width: (0, utils_1.pxToVh)(12) }, unit: "viewport" }, void 0, false, { fileName: _jsxFileName, lineNumber: 11, columnNumber: 7 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 9, columnNumber: 11 }, this));
    };
    exports.FleshIcon = FleshIcon;
});
//# sourceMappingURL=index.js.map