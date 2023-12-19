"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rows = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName =
  "D:/project/shakil-design-release/packages/components/src/organism/Table/rowContainer/index.tsx";
var checkbox_1 = require("../../../molecules/checkbox");
var cell_1 = require("../cell");
var context_1 = require("../context");
var row_1 = require("../row");
var style_1 = require("./style");
var Rows = function (_a) {
  var rowData = _a.rowData,
    columns = _a.columns,
    data = _a.data,
    rowIndex = _a.index,
    rowKey = _a.rowKey,
    checkedRows = _a.checkedRows,
    virtualItem = _a.virtualItem;
  var _b = (0, context_1.useMyTableContext)(),
    selectedRow = _b.selectedRow,
    onSelectRow = _b.onSelectRow,
    isOnCheckedRowsAvailable = _b.isOnCheckedRowsAvailable,
    isSelectSingleRowAvailable = _b.isSelectSingleRowAvailable,
    handleCheckRow = _b.handleCheckRow;
  var classes = (0, style_1.useStyles)();
  var _selectedRow = selectedRow;
  var isChecked = checkedRows.find(function (item) {
    return (
      rowKey &&
      (item === null || item === void 0 ? void 0 : item[rowKey]) ===
        rowData[rowKey]
    );
  });
  var onClickRow = function () {
    if (!isOnCheckedRowsAvailable && isSelectSingleRowAvailable) {
      onSelectRow === null || onSelectRow === void 0
        ? void 0
        : onSelectRow(rowData);
    }
    if (isOnCheckedRowsAvailable && rowKey) {
      handleCheckRow({ rowId: rowData[rowKey] });
    }
  };
  return (0, jsx_dev_runtime_1.jsxDEV)(
    row_1.Row,
    __assign(
      {
        virtualItem: virtualItem,
        rowData: rowData,
        rowKey: rowKey,
        rowIndex: rowIndex,
        isOnCheckedRowsAvailable: isOnCheckedRowsAvailable,
        isSelected: Boolean(
          rowKey && _selectedRow && _selectedRow[rowKey] === rowData[rowKey],
        ),
        onClick: onClickRow,
        isChecked: Boolean(isChecked),
      },
      {
        children: [
          (0, jsx_dev_runtime_1.jsxDEV)(
            "td",
            __assign(
              { style: { height: "inherit" } },
              {
                children: [
                  rowKey &&
                  selectedRow &&
                  _selectedRow[rowKey] === rowData[rowKey]
                    ? (0, jsx_dev_runtime_1.jsxDEV)(
                        "div",
                        { className: classes["selected"] },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 67,
                          columnNumber: 79,
                        },
                        _this,
                      )
                    : null,
                  isOnCheckedRowsAvailable
                    ? (0, jsx_dev_runtime_1.jsxDEV)(
                        "div",
                        __assign(
                          { className: classes["check-box"] },
                          {
                            children: (0, jsx_dev_runtime_1.jsxDEV)(
                              checkbox_1.CheckBox,
                              {
                                "data-testid": rowKey
                                  ? "row-".concat(String(rowData[rowKey]))
                                  : rowIndex,
                                onChange: function () {
                                  rowKey &&
                                    handleCheckRow({ rowId: rowData[rowKey] });
                                },
                                checked: Boolean(isChecked),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 72,
                                columnNumber: 13,
                              },
                              _this,
                            ),
                          },
                        ),
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 70,
                          columnNumber: 38,
                        },
                        _this,
                      )
                    : null,
                ],
              },
            ),
            void 0,
            true,
            { fileName: _jsxFileName, lineNumber: 66, columnNumber: 7 },
            _this,
          ),
          columns.map(function (_a, index) {
            var dataIndex = _a.dataIndex,
              render = _a.render,
              align = _a.align;
            var cell = rowData[dataIndex];
            return (0, jsx_dev_runtime_1.jsxDEV)(
              cell_1.Cell,
              __assign(
                { align: align },
                {
                  children: (0, jsx_dev_runtime_1.jsxDEV)(
                    jsx_dev_runtime_1.Fragment,
                    {
                      children: render
                        ? render({
                            value: cell,
                            index: rowIndex,
                            row: rowData,
                            data: data,
                          })
                        : cell,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 13,
                    },
                    _this,
                  ),
                },
              ),
              index,
              false,
              { fileName: _jsxFileName, lineNumber: 84, columnNumber: 17 },
              _this,
            );
          }),
        ],
      },
    ),
    void 0,
    true,
    { fileName: _jsxFileName, lineNumber: 53, columnNumber: 11 },
    _this,
  );
};
exports.Rows = Rows;
//# sourceMappingURL=index.js.map
