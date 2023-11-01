import { createContext } from 'react';
var defaultValue = {
    onClickPanel: function () { return ({}); },
    openedPanels: [],
    defaultOpen: false,
    handleDefaultOpen: function () { return ({}); },
};
var CollapseContext = createContext(defaultValue);
export { CollapseContext };
//# sourceMappingURL=context.js.map