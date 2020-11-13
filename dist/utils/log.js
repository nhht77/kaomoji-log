"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._Build = exports.log = void 0;
var date_1 = require("./date");
exports.log = console.log;
exports._Build = function (title, kaomoji_str, msg, options) {
    var displayTime = options.displayTime, displayKaomoji = options.displayKaomoji;
    exports.log("\n" + title + " " + date_1.now(displayTime) + " " + (displayKaomoji ? kaomoji_str : ""));
    exports.log(msg);
};
//# sourceMappingURL=log.js.map