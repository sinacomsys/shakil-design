"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseContext = void 0;
const react_1 = require("react");
const defaultValue = {
    onClickPanel: () => ({}),
    openedPanels: [],
    defaultOpen: false,
    handleDefaultOpen: () => ({}),
};
const CollapseContext = (0, react_1.createContext)(defaultValue);
exports.CollapseContext = CollapseContext;
//# sourceMappingURL=context.js.map