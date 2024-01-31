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
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/organism/Table/body/index.tsx";
var style_1 = require("./style");
var src_1 = require("@shakil-design/utils/src");
var rowContainer_1 = require("../rowContainer");
var context_1 = require("../../../theme/context");
var react_1 = require("react");
var context_2 = require("../context");
var react_2 = __importDefault(require("react"));
var atoms_1 = require("../../../atoms");
var TableBody = function (_a, ref) {
    var virtualRows = _a.virtualRows, noContent = _a.noContent, searchIconWidth = _a.searchIconWidth, dataList = _a.dataList, coloums = _a.coloums, colWidth = _a.colWidth, paddingBottom = _a.paddingBottom, paddingTop = _a.paddingTop, width = _a.width, loadingMore = _a.loadingMore;
    var classes = (0, style_1.useStyles)();
    var observer = (0, react_1.useRef)(null);
    var unit = (0, react_1.useContext)(context_1.UnitContext).unit;
    var _b = (0, context_2.useMyTableContext)(), testid = _b.testid, virtualizer = _b.virtualizer, rowKey = _b.rowKey, onLoadNextPage = _b.onLoadNextPage;
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
    return ((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: virtualRows.length > 0 ? ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: { height: "".concat(virtualizer === null || virtualizer === void 0 ? void 0 : virtualizer.getTotalSize(), "px") } }, { children: (0, jsx_dev_runtime_1.jsxDEV)("table", __assign({ ref: ref, style: { width: width }, className: classes["wrapper"], role: "table" }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("colgroup", { children: [(0, jsx_dev_runtime_1.jsxDEV)("col", { style: { width: searchIconWidth } }, void 0, false, { fileName: _jsxFileName, lineNumber: 77, columnNumber: 15 }, _this), coloums.map(function (_a) {
                                var width = _a.width, dataIndex = _a.dataIndex;
                                var _width = unit === "viewport" && width ? (0, src_1.pxToVwString)(width) : width;
                                return ((0, jsx_dev_runtime_1.jsxDEV)("col", { style: { width: _width ? _width : colWidth } }, dataIndex, false, { fileName: _jsxFileName, lineNumber: 81, columnNumber: 25 }, _this));
                            })] }, void 0, true, { fileName: _jsxFileName, lineNumber: 76, columnNumber: 13 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("tbody", __assign({ "data-testid": testid === null || testid === void 0 ? void 0 : testid.body }, { children: [paddingTop > 0 && (0, jsx_dev_runtime_1.jsxDEV)("tr", { style: { height: "".concat(paddingTop, "px") } }, void 0, false, { fileName: _jsxFileName, lineNumber: 90, columnNumber: 33 }, _this), virtualRows.map(function (virtualRow, index) {
                                var row = dataList[virtualRow.index];
                                if (virtualRows.length === index + 1) {
                                    return ((0, jsx_dev_runtime_1.jsxDEV)(rowContainer_1.Rows, { lastItem: lastItemRef, rowData: row, index: index, columns: coloums, virtualItem: virtualRow }, rowKey ? row[rowKey] : index, false, { fileName: _jsxFileName, lineNumber: 94, columnNumber: 27 }, _this));
                                }
                                return ((0, jsx_dev_runtime_1.jsxDEV)(rowContainer_1.Rows, { rowData: row, index: index, columns: coloums, virtualItem: virtualRow }, rowKey ? row[rowKey] : index, false, { fileName: _jsxFileName, lineNumber: 105, columnNumber: 25 }, _this));
                            }), loadingMore ? ((0, jsx_dev_runtime_1.jsxDEV)("tr", { children: (0, jsx_dev_runtime_1.jsxDEV)("td", __assign({ colSpan: 6 }, { children: (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ style: {
                                            display: "flex",
                                            justifyContent: "center",
                                            width: "100%",
                                        } }, { children: (0, jsx_dev_runtime_1.jsxDEV)(atoms_1.Text, __assign({ size: 20 }, { children: "loading..." }), void 0, false, { fileName: _jsxFileName, lineNumber: 125, columnNumber: 23 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 118, columnNumber: 21 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 117, columnNumber: 19 }, _this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 115, columnNumber: 31 }, _this)) : null, paddingBottom > 0 && ((0, jsx_dev_runtime_1.jsxDEV)("tr", { style: { height: "".concat(paddingBottom, "px") } }, void 0, false, { fileName: _jsxFileName, lineNumber: 131, columnNumber: 38 }, _this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 89, columnNumber: 13 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 70, columnNumber: 11 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 68, columnNumber: 34 }, _this)) : (noContent) }, void 0, false, { fileName: _jsxFileName, lineNumber: 66, columnNumber: 11 }, _this));
};
var TableBodyWrapper = react_2.default.forwardRef(TableBody);
exports.TableBody = TableBodyWrapper;
//# sourceMappingURL=index.js.map