var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react/jsx-dev-runtime", "classnames", "react", "../../atoms/text", "@shakil-design/utils", "./internalTabPane", "./style", "../../theme"], function (require, exports, jsx_dev_runtime_1, classnames_1, react_1, text_1, utils_1, internalTabPane_1, style_1, theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tabs = void 0;
    classnames_1 = __importDefault(classnames_1);
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tabs/index.tsx";
    const Tabs = ({ activeTab: activeTabProp, onChange, onClose, className, TabsTitle, noContent, items, }) => {
        const classes = (0, style_1.useStyles)();
        const { tab: { textColor } = {} } = (0, theme_1.useTheme)();
        const [activeTab, setActiveTab] = (0, react_1.useState)(null);
        const [openedTabs, setOpenedTabs] = (0, react_1.useState)([]);
        const tabListRef = (0, utils_1.useHorizontalScroll)();
        const handleOnChange = (id) => {
            onChange === null || onChange === void 0 ? void 0 : onChange(id);
            if (activeTabProp)
                return;
            setActiveTab(id);
        };
        const handleOnClose = (id) => {
            onClose === null || onClose === void 0 ? void 0 : onClose(id);
        };
        let _activeTab = null;
        if (activeTabProp) {
            _activeTab = activeTabProp;
        }
        else {
            _activeTab = activeTab;
        }
        (0, react_1.useEffect)(() => {
            if ((items === null || items === void 0 ? void 0 : items.length) > 0) {
                setActiveTab(items[0].id);
                setOpenedTabs(() => {
                    return [items[0].id];
                });
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        (0, react_1.useEffect)(() => {
            if (activeTabProp) {
                setOpenedTabs((prev) => {
                    const alreadyExist = prev.find((item) => item === activeTabProp);
                    if (alreadyExist)
                        return prev;
                    return [...prev, activeTabProp];
                });
            }
        }, [activeTabProp]);
        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: (0, classnames_1.default)(classes["tabs"], className) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["tabsContainer"] }, { children: [TabsTitle ? ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: {
                                backgroundColor: "white",
                                borderTopLeftRadius: 20,
                            } }, { children: typeof TabsTitle === "string" ? ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["tabsTitle"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(text_1.Text, Object.assign({ theme: "Regular", size: `${(0, utils_1.pxToVh)(20)}vh`, color: textColor }, { children: TabsTitle }), void 0, false, { fileName: _jsxFileName, lineNumber: 90, columnNumber: 17 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 88, columnNumber: 47 }, this)) : typeof TabsTitle === "object" ? (TabsTitle) : null }), void 0, false, { fileName: _jsxFileName, lineNumber: 81, columnNumber: 23 }, this)) : null, (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ ref: tabListRef, className: classes["tabsList"] }, { children: items === null || items === void 0 ? void 0 : items.map(({ id, renderTitle, closeable }) => {
                                const isActive = id === _activeTab;
                                return ((0, jsx_dev_runtime_1.jsxDEV)(internalTabPane_1.InternalTabPane, { renderTitle: renderTitle, isActive: isActive, onClick: handleOnChange, id: id, onClose: handleOnClose, closable: Boolean(closeable) }, id, false, { fileName: _jsxFileName, lineNumber: 107, columnNumber: 21 }, this));
                            }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 104, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 80, columnNumber: 7 }, this), (0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ className: classes["tabsContentContainer"] }, { children: noContent ? ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: { height: "100%" } }, { children: noContent }), void 0, false, { fileName: _jsxFileName, lineNumber: 123, columnNumber: 23 }, this)) : (openedTabs.map((_id) => {
                        const tab = items === null || items === void 0 ? void 0 : items.find(({ id }) => id === _id);
                        return ((0, jsx_dev_runtime_1.jsxDEV)("div", Object.assign({ style: {
                                display: (tab === null || tab === void 0 ? void 0 : tab.id) === _activeTab ? "block" : "none",
                                height: "100%",
                            } }, { children: tab === null || tab === void 0 ? void 0 : tab.content }), _id, false, { fileName: _jsxFileName, lineNumber: 128, columnNumber: 21 }, this));
                    })) }), void 0, false, { fileName: _jsxFileName, lineNumber: 122, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 78, columnNumber: 11 }, this));
    };
    exports.Tabs = Tabs;
});
//# sourceMappingURL=index.js.map