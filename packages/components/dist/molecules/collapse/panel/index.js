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
exports.Panel = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "/home/amir/project/TML/amir-shakil-design/shakil-design/packages/components/src/molecules/collapse/panel/index.tsx";
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var baseIcon_1 = require("../../../atoms/baseIcon");
var text_1 = require("../../../atoms/text");
var theme_1 = require("../../../theme");
var context_1 = require("../context");
var style_1 = require("./style");
var Panel = function (_a) {
    var children = _a.children, title = _a.title, id = _a.id;
    var classes = (0, style_1.useStyles)();
    var _b = (0, theme_1.useTheme)().collapse, _c = _b === void 0 ? {} : _b, closePanel = _c.closePanel, openPanel = _c.openPanel;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var _d = (0, react_1.useContext)(context_1.CollapseContext), openedPanels = _d.openedPanels, onClickPanel = _d.onClickPanel, defaultOpen = _d.defaultOpen, handleDefaultOpen = _d.handleDefaultOpen;
    var handleOnClick = function () {
        onClickPanel(id);
    };
    (0, react_1.useLayoutEffect)(function () {
        if (defaultOpen) {
            handleDefaultOpen(id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var isOpen = Boolean(openedPanels.find(function (item) { return item === id; }));
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { marginBottom: 16 } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["titleWrapper"], onClick: handleOnClick }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["title"] }, { children: typeof title === "string" ? ((0, jsx_dev_runtime_1.jsxDEV)(text_1.Text, __assign({ theme: "Regular", size: 16, color: isOpen ? openPanel : closePanel, ellipsis: true }, { children: title }), void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 41 }, _this)) : (title({ isOpen: isOpen })) }), void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 9 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, __assign({ style: { marginRight: 10 }, animate: { rotate: isOpen ? 180 : 0 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(baseIcon_1.BaseIcon, { color: isOpen ? openPanel : closePanel, name: "Every-Boxes-_-Flesh-Icon-for-more-choices", size: { height: 6, width: 12 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 11 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, __assign({ style: { overflow: "hidden", height: 0 }, animate: { height: isOpen ? "auto" : 0 } }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 64, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 11 }, _this));
};
exports.Panel = Panel;
//# sourceMappingURL=index.js.map