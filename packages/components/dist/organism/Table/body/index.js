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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBody = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "F:/shakil-design/packages/components/src/organism/Table/body/index.tsx";
var style_1 = require("./style");
var src_1 = require("@shakil-design/utils/src");
var rowContainer_1 = require("../rowContainer");
var context_1 = require("../../../theme/context");
var react_1 = require("react");
var context_2 = require("../context");
var react_2 = __importDefault(require("react"));
var atoms_1 = require("../../../atoms");
var topFreeSpace_1 = require("./topFreeSpace");
var endOfList_1 = require("./endOfList");
var TableBody = function (_a, ref) {
    var _b;
    var virtualRows = _a.virtualRows, noContent = _a.noContent, searchIconWidth = _a.searchIconWidth, dataList = _a.dataList, coloums = _a.coloums, colWidth = _a.colWidth, paddingBottom = _a.paddingBottom, paddingTop = _a.paddingTop, isLoadingMore = _a.isLoadingMore, endOfList = _a.endOfList;
    var classes = (0, style_1.useStyles)();
    var observer = (0, react_1.useRef)(null);
    var unit = (0, react_1.useContext)(context_1.UnitContext).unit;
    var _c = (0, context_2.useMyTableContext)(), testid = _c.testid, virtualizer = _c.virtualizer, rowKey = _c.rowKey, onLoadNextPage = _c.onLoadNextPage;
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
    return ((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: virtualRows.length > 0 ? ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { height: "".concat((_b = virtualizer === null || virtualizer === void 0 ? void 0 : virtualizer.getTotalSize()) !== null && _b !== void 0 ? _b : 0, "px") } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("table", __assign({ ref: ref, className: classes["wrapper"], role: "table" }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("colgroup", { children: [(0, jsx_dev_runtime_1.jsxDEV)("col", { style: { width: searchIconWidth } }, void 0, false, { fileName: _jsxFileName, lineNumber: 75, columnNumber: 15 }, _this), coloums.map(function (_a) {
                                var width = _a.width, dataIndex = _a.dataIndex;
                                var _width = unit === "viewport" && width ? (0, src_1.pxToVwString)(width) : width;
                                return ((0, jsx_dev_runtime_1.jsxDEV)("col", { style: { width: _width ? _width : colWidth } }, dataIndex, false, { fileName: _jsxFileName, lineNumber: 79, columnNumber: 25 }, _this));
                            })] }, void 0, true, { fileName: _jsxFileName, lineNumber: 74, columnNumber: 13 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("tbody", __assign({ "data-testid": testid === null || testid === void 0 ? void 0 : testid.body }, { children: [paddingTop > 0 && (0, jsx_dev_runtime_1.jsxDEV)(topFreeSpace_1.FreeSpace, { amount: paddingTop }, void 0, false, { fileName: _jsxFileName, lineNumber: 88, columnNumber: 33 }, _this), virtualRows.map(function (virtualRow, index) {
                                var row = dataList[virtualRow.index];
                                if (virtualRows.length === index + 1) {
                                    return ((0, jsx_dev_runtime_1.jsxDEV)(rowContainer_1.RowContainer, { lastItem: lastItemRef, rowData: row, index: index, columns: coloums, virtualItem: virtualRow }, rowKey ? row[rowKey] : index, false, { fileName: _jsxFileName, lineNumber: 92, columnNumber: 27 }, _this));
                                }
                                return ((0, jsx_dev_runtime_1.jsxDEV)(rowContainer_1.RowContainer, { rowData: row, index: index, columns: coloums, virtualItem: virtualRow }, rowKey ? row[rowKey] : index, false, { fileName: _jsxFileName, lineNumber: 103, columnNumber: 25 }, _this));
                            }), isLoadingMore ? ((0, jsx_dev_runtime_1.jsxDEV)(endOfList_1.EndOfList, __assign({ numberOfColumns: numberOfColumns }, { children: typeof isLoadingMore === "boolean" ? ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ size: 18 }, { children: "Loading..." }), void 0, false, { fileName: _jsxFileName, lineNumber: 115, columnNumber: 58 }, _this)) : (isLoadingMore) }), void 0, false, { fileName: _jsxFileName, lineNumber: 113, columnNumber: 33 }, _this)) : null, endOfList ? ((0, jsx_dev_runtime_1.jsxDEV)(endOfList_1.EndOfList, __assign({ numberOfColumns: numberOfColumns }, { children: typeof endOfList === "string" ? ((0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ size: 20 }, { children: endOfList }), void 0, false, { fileName: _jsxFileName, lineNumber: 124, columnNumber: 53 }, _this)) : (endOfList) }), void 0, false, { fileName: _jsxFileName, lineNumber: 122, columnNumber: 29 }, _this)) : null, paddingBottom > 0 && (0, jsx_dev_runtime_1.jsxDEV)(topFreeSpace_1.FreeSpace, { amount: paddingBottom }, void 0, false, { fileName: _jsxFileName, lineNumber: 132, columnNumber: 36 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 87, columnNumber: 13 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 73, columnNumber: 11 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 71, columnNumber: 34 }, _this)) : (noContent) }, void 0, false, { fileName: _jsxFileName, lineNumber: 69, columnNumber: 11 }, _this));
};
var TableBodyWrapper = react_2.default.forwardRef(TableBody);
exports.TableBody = TableBodyWrapper;
//# sourceMappingURL=index.js.map