define(["require", "exports", "react"], function (require, exports, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CollapseContext = void 0;
    const defaultValue = {
        onClickPanel: () => ({}),
        openedPanels: [],
        defaultOpen: false,
        handleDefaultOpen: () => ({}),
    };
    const CollapseContext = (0, react_1.createContext)(defaultValue);
    exports.CollapseContext = CollapseContext;
});
//# sourceMappingURL=context.js.map