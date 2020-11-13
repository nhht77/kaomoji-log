"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kaomoji = void 0;
var chalk_1 = __importDefault(require("chalk"));
var green = chalk_1.default.green;
var red = chalk_1.default.red;
var blue = chalk_1.default.blue;
var yellow = chalk_1.default.yellow;
// Note: Prepare Kaomoji Log
// TODO PICK Random kaomoji that represent the category
exports.kaomoji = function (isDisplay) {
    if (isDisplay === void 0) { isDisplay = true; }
    return ({
        success: isDisplay ? green("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  ") : "",
        info: isDisplay ? blue("(￣ρ￣)..zzZZ  ") : "",
        error: isDisplay ? red("(╯°益°)╯彡┻━┻  ") : "",
        warning: isDisplay ? yellow("┐(￣ヘ￣;)┌  ") : "",
    });
};
//# sourceMappingURL=kaomoji.js.map