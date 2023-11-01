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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleshIcon = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/components/fleshIcon/index.tsx";
var framer_motion_1 = require("framer-motion");
var atoms_1 = require("../../../../atoms");
var theme_1 = require("../../../../theme");
var utils_1 = require("@shakil-design/utils");
var FleshIcon = function (_a) {
    var isVisible = _a.isVisible;
    var _b = (0, theme_1.useTheme)().select, _c = _b === void 0 ? {} : _b, fleshIcon = _c.fleshIcon;
    return ((0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, __assign({ animate: { rotate: isVisible ? 180 : 0 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.BaseIcon, { color: fleshIcon, name: "Every-Boxes-_-Flesh-Icon-for-more-choices", size: { height: (0, utils_1.pxToVh)(7), width: (0, utils_1.pxToVh)(12) }, unit: "viewport" }, void 0, false, { fileName: _jsxFileName, lineNumber: 11, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 9, columnNumber: 11 }, _this));
};
exports.FleshIcon = FleshIcon;
//# sourceMappingURL=index.js.map