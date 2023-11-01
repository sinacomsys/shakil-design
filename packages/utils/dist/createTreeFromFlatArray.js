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
var createTreeFromFlatArray = function (items, parentId) {
    return ((items === null || items === void 0 ? void 0 : items.filter(function (item) {
        return parentId === undefined
            ? !item.parentId
            : item.parentId == parentId;
    }).map(function (item) {
        return __assign(__assign({}, item), { children: createTreeFromFlatArray(items, item.id) });
    })) || []);
};
export { createTreeFromFlatArray };
//# sourceMappingURL=createTreeFromFlatArray.js.map