"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = exports.theming = exports.withTheme = exports.useTheme = exports.context = exports.ShakilDesignThemeProvider = void 0;
var context_1 = require("./context");
Object.defineProperty(exports, "ShakilDesignThemeProvider", { enumerable: true, get: function () { return context_1.ShakilDesignThemeProvider; } });
Object.defineProperty(exports, "theming", { enumerable: true, get: function () { return context_1.theming; } });
Object.defineProperty(exports, "Colors", { enumerable: true, get: function () { return context_1.Colors; } });
var useTheme = context_1.rest.useTheme, context = context_1.rest.context, withTheme = context_1.rest.withTheme;
exports.useTheme = useTheme;
exports.context = context;
exports.withTheme = withTheme;
//# sourceMappingURL=index.js.map