"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.title = void 0;
var chalk_1 = __importDefault(require("chalk"));
var greenI = chalk_1.default.green.inverse;
var redI = chalk_1.default.red.inverse;
var blueI = chalk_1.default.blue.inverse;
var yellowI = chalk_1.default.yellow.inverse;
exports.title = {
    success: greenI(" SUCCESS "),
    info: blueI(" Info "),
    error: redI(" Error "),
    warning: yellowI(" WARNING "),
};
//# sourceMappingURL=title.js.map