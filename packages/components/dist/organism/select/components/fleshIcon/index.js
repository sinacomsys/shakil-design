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
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/select/components/fleshIcon/index.tsx";
import { motion } from "framer-motion";
import { BaseIcon } from "../../../../atoms";
import { useTheme } from "../../../../theme";
import { pxToVh } from "@shakil-design/utils";
var FleshIcon = function (_a) {
    var isVisible = _a.isVisible;
    var _b = useTheme().select, _c = _b === void 0 ? {} : _b, fleshIcon = _c.fleshIcon;
    return (_jsxDEV(motion.div, __assign({ animate: { rotate: isVisible ? 180 : 0 } }, { children: _jsxDEV(BaseIcon, { color: fleshIcon, name: "Every-Boxes-_-Flesh-Icon-for-more-choices", size: { height: pxToVh(7), width: pxToVh(12) }, unit: "viewport" }, void 0, false, { fileName: _jsxFileName, lineNumber: 11, columnNumber: 7 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 9, columnNumber: 11 }, _this));
};
export { FleshIcon };
//# sourceMappingURL=index.js.map