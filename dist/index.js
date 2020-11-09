"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.log = void 0;
var chalk_1 = __importDefault(require("chalk"));
exports.log = console.log;
var green = chalk_1.default.green;
var greenI = chalk_1.default.green.inverse;
var red = chalk_1.default.red;
var redI = chalk_1.default.red.inverse;
var blue = chalk_1.default.blue;
var blueI = chalk_1.default.blue.inverse;
var yellow = chalk_1.default.yellow;
var yellowI = chalk_1.default.yellow.inverse;
var gray = chalk_1.default.gray;
exports.Log = (function () {
    var opts = {
        displayTime: true,
        displayKaomoji: true,
    };
    var Set = function (options) { return (opts = __assign(__assign({}, opts), (options || {}))); };
    var now = function () {
        var d = new Date(), dformat = "";
        if (typeof opts.displayTime == "object" && opts.displayTime.displayDate) {
            dformat = [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/");
        }
        if (typeof opts.displayTime == "object" && opts.displayTime.displayHour) {
            dformat = [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
        }
        if ((opts.displayTime && typeof opts.displayTime == "boolean") ||
            (typeof opts.displayTime == "object" &&
                opts.displayTime.displayDate &&
                opts.displayTime.displayHour)) {
            dformat =
                [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
                    " " +
                    [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
        }
        return gray(dformat);
    };
    var kaomoji = function () { return ({
        success: opts.displayKaomoji ? green("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  ") : "",
        info: opts.displayKaomoji ? blue("(￣ρ￣)..zzZZ  ") : "",
        error: opts.displayKaomoji ? red("(╯°益°)╯彡┻━┻  ") : "",
        warning: opts.displayKaomoji ? yellow("┐(￣ヘ￣;)┌  ") : "",
    }); };
    return {
        Set: function (options) { return Set(options); },
        Success: function (msg) {
            if (msg === void 0) { msg = "Success Log"; }
            exports.log("\n" + greenI(" SUCCESS ") + " " + now() + "\n");
            if (typeof msg === "string")
                exports.log("" + kaomoji().success + msg + "\n");
            else {
                opts.displayKaomoji && exports.log(kaomoji().success + " \n");
                exports.log(msg);
            }
        },
        Error: function (msg) {
            if (msg === void 0) { msg = "Error Log"; }
            exports.log("\n" + redI(" Error ") + " " + now() + " \n");
            if (msg === "string")
                exports.log("" + kaomoji().error + msg + "\n");
            else {
                opts.displayKaomoji && exports.log(kaomoji().error + " \n");
                exports.log(msg);
            }
        },
        Info: function (msg) {
            if (msg === void 0) { msg = "Info Log"; }
            exports.log("\n" + blueI(" Info ") + " " + now() + "\n");
            if (msg === "string")
                exports.log("" + kaomoji().info + msg + "\n");
            else {
                opts.displayKaomoji && exports.log(kaomoji().info + " \n");
                exports.log(msg);
            }
        },
        Warning: function (msg) {
            if (msg === void 0) { msg = "Warning Log"; }
            exports.log("\n" + yellowI(" WARNING ") + " " + now() + "\n");
            if (msg === "string")
                exports.log("" + kaomoji().warning + msg + " \n");
            else {
                opts.displayKaomoji && exports.log(kaomoji().warning + " \n");
                exports.log(msg);
            }
        },
        Test: function (msg) {
            if (msg === void 0) { msg = "Test"; }
            exports.log("" + kaomoji().success + msg + " " + opts.displayKaomoji);
        },
        JSON: function (val) { return exports.log(val); },
    };
})();
exports.default = exports.Log;
//# sourceMappingURL=index.js.map