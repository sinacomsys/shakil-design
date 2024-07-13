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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "D:/project/shakil-design-release/packages/components/src/molecules/tabs/index.tsx";
var classnames_1 = __importDefault(require("classnames"));
var react_1 = require("react");
var text_1 = require("../../atoms/text");
var src_1 = require("@shakil-design/utils/src");
var internalTabPane_1 = require("./internalTabPane");
var style_1 = require("./style");
var theme_1 = require("../../theme");
var Tabs = function (_a) {
    var activeTabProp = _a.activeTab, onChange = _a.onChange, onClose = _a.onClose, className = _a.className, TabsTitle = _a.TabsTitle, noContent = _a.noContent, items = _a.items;
    var classes = (0, style_1.useStyles)();
    var _b = (0, theme_1.useTheme)().tab, _c = _b === void 0 ? {} : _b, textColor = _c.textColor;
    var _d = (0, react_1.useState)(null), activeTabState = _d[0], setActiveTabState = _d[1];
    var _e = (0, react_1.useState)([]), openedTabs = _e[0], setOpenedTabs = _e[1];
    var tabListRef = (0, src_1.useHorizontalScroll)();
    var handleOnChange = function (id) {
        onChange === null || onChange === void 0 ? void 0 : onChange(id);
        if (activeTabProp)
            return;
        setActiveTabState(id);
    };
    var handleOnClose = function (id) {
        onClose === null || onClose === void 0 ? void 0 : onClose(id);
    };
    var _activeTab = null;
    if (activeTabProp) {
        _activeTab = activeTabProp;
    }
    else {
        _activeTab = activeTabState;
    }
    (0, react_1.useEffect)(function () {
        if (activeTabProp)
            return;
        if ((items === null || items === void 0 ? void 0 : items.length) > 0) {
            setActiveTabState(items[0].id);
            setOpenedTabs(function () {
                return [items[0].id];
            });
        }
    }, [activeTabProp, items]);
    (0, react_1.useEffect)(function () {
        if (activeTabProp) {
            setOpenedTabs(function (prev) {
                var alreadyExist = prev.find(function (item) { return item === activeTabProp; });
                if (alreadyExist)
                    return prev;
                return __spreadArray(__spreadArray([], prev, true), [activeTabProp], false);
            });
        }
    }, [activeTabProp]);
    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)(classes["tabs"], className) }, { children: [(0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["tabs-nav-wrap"] }, { children: [TabsTitle ? ((0, jsx_dev_runtime_1.jsxDEV)(jsx_dev_runtime_1.Fragment, { children: typeof TabsTitle === "string" ? ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["tabsTitle"] }, { children: (0, jsx_dev_runtime_1.jsxDEV)(text_1.Text, __assign({ theme: "Regular", size: 20, color: textColor }, { children: TabsTitle }), void 0, false, { fileName: _jsxFileName, lineNumber: 85, columnNumber: 17 }, _this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 83, columnNumber: 47 }, _this)) : typeof TabsTitle === "object" ? (TabsTitle) : null }, void 0, false, { fileName: _jsxFileName, lineNumber: 81, columnNumber: 23 }, _this)) : null, (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ ref: tabListRef, className: classes["tabs-nav-list"] }, { children: items === null || items === void 0 ? void 0 : items.map(function (_a) {
                            var id = _a.id, renderTitle = _a.renderTitle, closeable = _a.closeable;
                            var isActive = id === _activeTab;
                            return ((0, jsx_dev_runtime_1.jsxDEV)(internalTabPane_1.InternalTabPane, { renderTitle: renderTitle, isActive: isActive, onClick: handleOnChange, id: id, onClose: handleOnClose, closeable: Boolean(closeable) }, id, false, { fileName: _jsxFileName, lineNumber: 98, columnNumber: 21 }, _this));
                        }) }), void 0, false, { fileName: _jsxFileName, lineNumber: 95, columnNumber: 9 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 80, columnNumber: 7 }, _this), (0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["tabs-content-holder"] }, { children: noContent ? ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: classes["no-content"] }, { children: noContent }), void 0, false, { fileName: _jsxFileName, lineNumber: 114, columnNumber: 23 }, _this)) : (openedTabs.map(function (_id) {
                    var tab = items === null || items === void 0 ? void 0 : items.find(function (_a) {
                        var id = _a.id;
                        return id === _id;
                    });
                    return ((0, jsx_dev_runtime_1.jsxDEV)("div", __assign({ className: (0, classnames_1.default)(classes["tab-content"], (tab === null || tab === void 0 ? void 0 : tab.id) === _activeTab
                            ? "".concat(classes["tab-content"], "--active")
                            : "".concat(classes["tab-content"], "--not-active")) }, { children: tab === null || tab === void 0 ? void 0 : tab.content }), _id, false, { fileName: _jsxFileName, lineNumber: 119, columnNumber: 21 }, _this));
                })) }), void 0, false, { fileName: _jsxFileName, lineNumber: 113, columnNumber: 7 }, _this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 78, columnNumber: 11 }, _this));
};
exports.Tabs = Tabs;
//# sourceMappingURL=index.js.map