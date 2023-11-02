define(["require", "exports", "react"], function (require, exports, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RadioContext = void 0;
    const initialValue = {
        value: undefined,
        onChange: () => ({}),
        name: undefined,
        // mode: "light",
    };
    const RadioContext = (0, react_1.createContext)(initialValue);
    exports.RadioContext = RadioContext;
});
//# sourceMappingURL=context.js.map