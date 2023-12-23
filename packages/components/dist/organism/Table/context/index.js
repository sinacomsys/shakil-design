"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMyTableContext = exports.TableContext = void 0;
var react_1 = require("react");
exports.TableContext = (0, react_1.createContext)({
  order: undefined,
  orderBy: undefined,
  onOrderChange: function () {
    return {};
  },
  isAllRowsChecked: false,
  onCheckAllRows: function () {
    return {};
  },
  onSelectRow: function () {
    return {};
  },
  selectedRow: undefined,
  isOverflowed: false,
  testid: undefined,
  onRow: function () {
    return {};
  },
  virtualizer: undefined,
  handleCheckRow: function () {},
  checkedRows: [],
  rowKey: undefined,
  data: [],
  mode: "single",
  onDeselectCheckedRows: function () {},
});
function useMyTableContext() {
  return (0, react_1.useContext)(exports.TableContext);
}
exports.useMyTableContext = useMyTableContext;
//# sourceMappingURL=index.js.map
