"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunkDaysOfMonth = void 0;
var getDaysOfMonth_1 = require("./getDaysOfMonth");
var lodash_1 = __importDefault(require("lodash"));
var chunkDaysOfMonth = function (currentMonth) {
    if (!currentMonth)
        return;
    var dayOfMonth = (0, getDaysOfMonth_1.getDaysOfMonth)(currentMonth, false);
    return lodash_1.default.chunk(dayOfMonth, 7).map(function (item) {
        return item.map(function (item2) {
            return item2;
        });
    });
};
exports.chunkDaysOfMonth = chunkDaysOfMonth;
//# sourceMappingURL=chuckDaysOfMonth.js.map