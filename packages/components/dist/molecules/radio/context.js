import { createContext } from "react";
var initialValue = {
    value: undefined,
    onChange: function () { return ({}); },
    name: undefined,
    // mode: "light",
};
var RadioContext = createContext(initialValue);
export { RadioContext };
//# sourceMappingURL=context.js.map