define(["require", "exports", "react"], function (require, exports, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TableContext = void 0;
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
});
//# sourceMappingURL=index.js.map