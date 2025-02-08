"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeRef = void 0;
function fillRef(ref, node) {
    if (typeof ref === "function") {
        ref(node);
    }
    else if (typeof ref === "object" && ref && "current" in ref) {
        ref.current = node;
    }
}
/** Merge refs into one ref function to support ref passing. */
function composeRef() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return function (node) {
        refs.forEach(function (ref) {
            fillRef(ref, node);
        });
    };
}
exports.composeRef = composeRef;
//# sourceMappingURL=composeRef.js.map