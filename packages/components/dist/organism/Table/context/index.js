import { createContext } from "react";
export var TableContext = createContext({
    order: undefined,
    orderBy: undefined,
    onOrderChange: function () { return ({}); },
    isAllRowsChecked: false,
    onCheckAllRows: function () { return ({}); },
    onSelectRow: function () { return ({}); },
    selectedRow: undefined,
    isOnCheckedRowsAvailable: false,
    isSelectSingleRowAvailable: false,
});
//# sourceMappingURL=index.js.map