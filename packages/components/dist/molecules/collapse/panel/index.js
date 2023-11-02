define(["require", "exports", "react/jsx-dev-runtime", "framer-motion", "react", "../../../atoms/baseIcon", "../../../atoms/text", "../../../theme", "../context", "./style"], function (require, exports, jsx_dev_runtime_1, framer_motion_1, react_1, baseIcon_1, text_1, theme_1, context_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Panel = void 0;
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/collapse/panel/index.tsx";
    const Panel = ({ children, title, id }) => {
        const classes = (0, style_1.useStyles)();
        const { collapse: { closePanel, openPanel } = {} } = (0, theme_1.useTheme)();
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { openedPanels, onClickPanel, defaultOpen, handleDefaultOpen } = (0, react_1.useContext)(context_1.CollapseContext);
        const handleOnClick = () => {
            onClickPanel(id);
        };
        (0, react_1.useLayoutEffect)(() => {
            if (defaultOpen) {
                handleDefaultOpen(id);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        const isOpen = Boolean(openedPanels.find((item) => item === id));
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { marginBottom: 16 } }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["titleWrapper"], onClick: handleOnClick }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["title"] }, { children: typeof title === "string" ? ((0, jsx_dev_runtime_1.jsxDEV)(text_1.Text, Object.assign({ theme: "Regular", size: 16, color: isOpen ? openPanel : closePanel, ellipsis: true }, { children: title }), void 0, false, { fileName: _jsxFileName, lineNumber: 39, columnNumber: 41 }, this)) : (title({ isOpen })) }), void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 9 }, this), (0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, Object.assign({ style: { marginRight: 10 }, animate: { rotate: isOpen ? 180 : 0 } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(baseIcon_1.BaseIcon, { color: isOpen ? openPanel : closePanel, name: "Every-Boxes-_-Flesh-Icon-for-more-choices", size: { height: 6, width: 12 } }, void 0, false, { fileName: _jsxFileName, lineNumber: 56, columnNumber: 11 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 52, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 37, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)(framer_motion_1.motion.div, Object.assign({ style: { overflow: "hidden", height: 0 }, animate: { height: isOpen ? "auto" : 0 } }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 64, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 11 }, this));
    };
    exports.Panel = Panel;
});
//# sourceMappingURL=index.js.map