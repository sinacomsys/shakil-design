var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var findGrandParents = function (id, treeSources) {
    var finded = treeSources === null || treeSources === void 0 ? void 0 : treeSources.find(function (item) { return item.id === id; });
    if (finded) {
        return __spreadArray([finded], findGrandParents(finded === null || finded === void 0 ? void 0 : finded.parentId, treeSources), true);
    }
    return [];
};
//# sourceMappingURL=findGrandParents.js.map