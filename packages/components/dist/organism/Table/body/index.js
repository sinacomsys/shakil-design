"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBody = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("./style");
var src_1 = require("@shakil-design/utils/src");
var rowContainer_1 = require("../rowContainer");
var context_1 = require("../../../theme/context");
var react_1 = require("react");
var context_2 = require("../context");
var react_2 = __importDefault(require("react"));
var atoms_1 = require("../../../atoms");
var endOfList_1 = require("./endOfList");
var TableBody = function (_a, ref) {
    var _b;
    var noContent = _a.noContent, searchIconWidth = _a.searchIconWidth, dataList = _a.dataList, coloums = _a.coloums, colWidth = _a.colWidth, 
    // isLoadingMore,
    endOfList = _a.endOfList;
    var classes = (0, style_1.useStyles)();
    var observer = (0, react_1.useRef)(null);
    var unit = (0, react_1.useContext)(context_1.UnitContext).unit;
    var _c = (0, context_2.useMyTableContext)(), testid = _c.testid, virtualizer = _c.virtualizer, rowKey = _c.rowKey, onLoadNextPage = _c.onLoadNextPage;
    var virtualRows = (virtualizer === null || virtualizer === void 0 ? void 0 : virtualizer.getVirtualItems()) || [];
    var lastItemRef = (0, react_1.useCallback)(function (node) {
        if (observer.current)
            observer.current.disconnect();
        observer.current = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                onLoadNextPage === null || onLoadNextPage === void 0 ? void 0 : onLoadNextPage();
            }
        });
        if (node)
            observer.current.observe(node);
    }, [onLoadNextPage]);
    var numberOfColumns = coloums.length;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: virtualRows.length > 0 ? ((0, jsx_runtime_1.jsx)("div", __assign({ style: { height: "".concat((_b = virtualizer === null || virtualizer === void 0 ? void 0 : virtualizer.getTotalSize()) !== null && _b !== void 0 ? _b : 0, "px") } }, { children: (0, jsx_runtime_1.jsxs)("table", __assign({ ref: ref, className: classes["wrapper"], role: "table" }, { children: [(0, jsx_runtime_1.jsxs)("colgroup", { children: [(0, jsx_runtime_1.jsx)("col", { style: { width: searchIconWidth } }), coloums.map(function (_a) {
                                var width = _a.width, dataIndex = _a.dataIndex;
                                var _width = unit === "viewport" && width ? (0, src_1.pxToVwString)(width) : width;
                                return ((0, jsx_runtime_1.jsx)("col", { style: { width: _width ? _width : colWidth } }, dataIndex));
                            })] }), (0, jsx_runtime_1.jsx)("tbody", __assign({ "data-testid": testid === null || testid === void 0 ? void 0 : testid.body }, { children: virtualRows.map(function (virtualRow, index) {
                            var row = dataList[virtualRow.index];
                            if (row === "endOfList") {
                                var transformY = virtualRow.start - index * virtualRow.size;
                                return ((0, jsx_runtime_1.jsx)(endOfList_1.EndOfList, __assign({ transformY: transformY, numberOfColumns: numberOfColumns }, { children: typeof endOfList === "string" ? ((0, jsx_runtime_1.jsx)(atoms_1.Text, __assign({ size: 20 }, { children: endOfList }))) : (endOfList) }), row));
                            }
                            else if (virtualRows.length === index + 1) {
                                return ((0, jsx_runtime_1.jsx)(rowContainer_1.RowContainer, { lastItem: lastItemRef, rowData: row, index: index, columns: coloums, virtualItem: virtualRow }, rowKey ? row[rowKey] : index));
                            }
                            return ((0, jsx_runtime_1.jsx)(rowContainer_1.RowContainer, { rowData: row, index: index, columns: coloums, virtualItem: virtualRow }, rowKey ? row[rowKey] : index));
                        }) }))] })) }))) : (noContent) }));
};
var TableBodyWrapper = react_2.default.forwardRef(TableBody);
exports.TableBody = TableBodyWrapper;
//# sourceMappingURL=index.js.map