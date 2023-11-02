"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseContext = void 0;
var react_1 = require("react");
var defaultValue = {
    onClickPanel: function () { return ({}); },
    openedPanels: [],
    defaultOpen: false,
    handleDefaultOpen: function () { return ({}); },
};
var CollapseContext = (0, react_1.createContext)(defaultValue);
exports.CollapseContext = CollapseContext;
//# sourceMappingURL=context.js.map