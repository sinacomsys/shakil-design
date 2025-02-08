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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var react_1 = require("react");
var src_1 = require("@shakil-design/utils/src");
var style_1 = require("./style");
var cardNavList_1 = require("./tabPane/cardNavList");
var lineNavList_1 = require("./tabPane/lineNavList");
var Tabs = function (_a) {
    var activeTabProp = _a.activeTab, onChange = _a.onChange, onClose = _a.onClose, className = _a.className, noContent = _a.noContent, items = _a.items, type = _a.type, tabBarExtraContent = _a.tabBarExtraContent;
    var classes = (0, style_1.useStyles)();
    var _b = (0, react_1.useState)(0), extraActionWidth = _b[0], setExtraActionWidth = _b[1];
    var _c = (0, react_1.useState)(0), navBarWidth = _c[0], setNavBarWidth = _c[1];
    var _d = (0, react_1.useState)(undefined), activeTabState = _d[0], setActiveTabState = _d[1];
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
    var _activeTab = undefined;
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
    var getExtraActionWidth = (0, react_1.useCallback)(function (body) {
        setExtraActionWidth((body === null || body === void 0 ? void 0 : body.clientWidth) || 0);
    }, []);
    var getNavListWidth = function (body) {
        setNavBarWidth(body === null || body === void 0 ? void 0 : body.clientWidth);
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, classnames_1.default)(classes["tabs"], className) }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: classes["nav-list-wrapper"], ref: getNavListWidth }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: classes["nav-list"], ref: tabListRef, style: { width: navBarWidth - extraActionWidth } }, { children: type === "card" ? ((0, jsx_runtime_1.jsx)(cardNavList_1.CardNavList, { items: items, activeTab: _activeTab, onChange: handleOnChange, onClose: handleOnClose })) : ((0, jsx_runtime_1.jsx)(lineNavList_1.LineNavList, { items: items, activeTab: _activeTab, onChange: handleOnChange, onClose: handleOnClose })) })), (0, jsx_runtime_1.jsx)("div", __assign({ ref: getExtraActionWidth, style: { height: "100%" } }, { children: tabBarExtraContent }))] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: classes["content-holder"] }, { children: noContent ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: classes["no-content"] }, { children: noContent }))) : (openedTabs.map(function (_id) {
                    var tab = items === null || items === void 0 ? void 0 : items.find(function (_a) {
                        var id = _a.id;
                        return id === _id;
                    });
                    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)(classes["tab-content"], (tab === null || tab === void 0 ? void 0 : tab.id) === _activeTab
                            ? "".concat(classes["tab-content"], "--active")
                            : "".concat(classes["tab-content"], "--not-active")) }, { children: tab === null || tab === void 0 ? void 0 : tab.content }), _id));
                })) }))] })));
};
exports.Tabs = Tabs;
//# sourceMappingURL=index.js.map