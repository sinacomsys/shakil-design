define(["require", "exports", "react/jsx-dev-runtime", "react", "./context", "./panel"], function (require, exports, jsx_dev_runtime_1, react_1, context_1, panel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Collapse = void 0;
    const _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/collapse/index.tsx";
    const Collapse = ({ children, accordion, onChange, activeKey, defaultOpen, }) => {
        const [openedPanels, setOpenPanel] = (0, react_1.useState)([]);
        let _openedPanels = [];
        if (activeKey) {
            _openedPanels = activeKey;
        }
        else {
            _openedPanels = openedPanels;
        }
        const handleDefaultOpen = (id) => {
            setOpenPanel((prev) => [...prev, id]);
        };
        const handleOnClickPanel = (id) => {
            if (activeKey) {
                onChange === null || onChange === void 0 ? void 0 : onChange({ activePanelsKey: [id], clickedPanelKey: id });
                return;
            }
            const alreadyExist = openedPanels.find((item) => item === id);
            let _openedPanels = [];
            if (!accordion) {
                if (alreadyExist) {
                    _openedPanels = openedPanels.filter((item) => item !== alreadyExist);
                    setOpenPanel(_openedPanels);
                }
                else if (!alreadyExist) {
                    _openedPanels = [...openedPanels, id];
                    setOpenPanel(_openedPanels);
                }
            }
            else if (accordion) {
                _openedPanels = alreadyExist ? [] : [id];
                setOpenPanel(_openedPanels);
            }
            onChange === null || onChange === void 0 ? void 0 : onChange({ activePanelsKey: _openedPanels, clickedPanelKey: id });
        };
        return ((0, jsx_dev_runtime_1.jsxDEV)(context_1.CollapseContext.Provider, Object.assign({ value: {
                onClickPanel: handleOnClickPanel,
                openedPanels: _openedPanels,
                defaultOpen: defaultOpen || false,
                handleDefaultOpen,
            } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", { children: children }, void 0, false, { fileName: _jsxFileName, lineNumber: 69, columnNumber: 7 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 60, columnNumber: 11 }, this));
    };
    exports.Collapse = Collapse;
    Collapse.Panel = panel_1.Panel;
});
//# sourceMappingURL=index.js.map