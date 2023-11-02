var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./getDaysOfMonth", "lodash"], function (require, exports, getDaysOfMonth_1, lodash_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chunkDaysOfMonth = void 0;
    lodash_1 = __importDefault(lodash_1);
    const chunkDaysOfMonth = (currentMonth) => {
        if (!currentMonth)
            return;
        const dayOfMonth = (0, getDaysOfMonth_1.getDaysOfMonth)(currentMonth, false);
        return lodash_1.default.chunk(dayOfMonth, 7).map((item) => {
            return item.map((item2) => {
                return item2;
            });
        });
    };
    exports.chunkDaysOfMonth = chunkDaysOfMonth;
});
//# sourceMappingURL=chuckDaysOfMonth.js.map