"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableContext = void 0;
const react_1 = require("react");
exports.TableContext = (0, react_1.createContext)({
    order: undefined,
    orderBy: undefined,
    onOrderChange: () => ({}),
    isAllRowsChecked: false,
    onCheckAllRows: () => ({}),
    onSelectRow: () => ({}),
    selectedRow: undefined,
    isOnCheckedRowsAvailable: false,
    isSelectSingleRowAvailable: false,
});
//# sourceMappingURL=index.js.map