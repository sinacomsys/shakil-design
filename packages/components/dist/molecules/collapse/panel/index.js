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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/collapse/panel/index.tsx";
import { motion } from "framer-motion";
import { useContext, useLayoutEffect } from "react";
import { BaseIcon } from "../../../atoms/baseIcon";
import { Text } from "../../../atoms/text";
import { useTheme } from "../../../theme";
import { CollapseContext } from "../context";
import { useStyles } from "./style";
var Panel = function (_a) {
    var children = _a.children, title = _a.title, id = _a.id;
    var classes = useStyles();
    var _b = useTheme().collapse, _c = _b === void 0 ? {} : _b, closePanel = _c.closePanel, openPanel = _c.openPanel;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var _d = useContext(CollapseContext), openedPanels = _d.openedPanels, onClickPanel = _d.onClickPanel, defaultOpen = _d.defaultOpen, handleDefaultOpen = _d.handleDefaultOpen;
    var handleOnClick = function () {
        onClickPanel(id);
    };
    useLayoutEffect(function () {
        if (defaultOpen) {
            handleDefaultOpen(id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var isOpen = Boolean(openedPanels.find(function (item) { return item === id; }));
    return (_jsxDEV("div", __assign({ style: { marginBottom: 16 } }, { children: [_jsxDEV("div", __assign({ className: classes["titleWrapper"], onClick: handleOnClick }, { children: [_jsxDEV("div", __assign({ className: classes["title"] }, { children: typeof title === "string" ? (_jsxDEV(Text, __assign({ theme: "Regular", size: 16, color: isOpen ? openPanel : closePanel, ellipsis: true }, { children: title }), void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 41 }, _this)) : (title({ isOpen: isOpen })) }), void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 9 }, _this), _jsxDEV(motion.div, __assign({ style: { marginRight: 10 }, animate: { rotate: isOpen ? 180 : 0 } }, { children: _jsxDEV(BaseIcon, { color: isOpen ? openPanel : closePanel, name: "Every-Boxes-_-Flesh-Icon-for-more-choices", size: { height: 6, width: 12 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 11 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 7 }, _this), _jsxDEV(motion.div, __assign({ style: { overflow: "hidden", height: 0 }, animate: { height: isOpen ? "auto" : 0 } }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 64, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 11 }, _this));
};
export { Panel };
//# sourceMappingURL=index.js.map