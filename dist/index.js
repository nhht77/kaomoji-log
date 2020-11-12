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
    // Note: Prepare Date String Log
    var now = function () {
        var d = new Date(), dformat = "";
        // Note: only show dd/mm/yyyy if option displayDate is true
        if (typeof opts.displayTime == "object" && opts.displayTime.displayDate)
            dformat = [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("/");
        // Note: only show hh:mm:ss if option displayHour is true
        if (typeof opts.displayTime == "object" && opts.displayTime.displayHour)
            dformat = [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
        // Note: show both dd/mm/yyyy hh:mm:ss if options is true
        // Or displayHour and displayDate is true
        if ((typeof opts.displayTime == "boolean" && opts.displayTime) ||
            (typeof opts.displayTime == "object" &&
                opts.displayTime.displayDate &&
                opts.displayTime.displayHour))
            dformat =
                [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
                    " " +
                    [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
        return gray(dformat);
    };
    // Note: Prepare Kaomoji Log
    // TODO PICK Random kaomoji that represent the category
    var kaomoji = function () { return ({
        success: opts.displayKaomoji ? green("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  ") : "",
        info: opts.displayKaomoji ? blue("(￣ρ￣)..zzZZ  ") : "",
        error: opts.displayKaomoji ? red("(╯°益°)╯彡┻━┻  ") : "",
        warning: opts.displayKaomoji ? yellow("┐(￣ヘ￣;)┌  ") : "",
    }); };
    function Log(value, options) {
        if (options)
            Log.SetOptions(options);
        exports.log("\n" + now());
        exports.log(value);
    }
    Log.GetOptions = function () {
        exports.log(opts);
        return opts;
    };
    Log.SetOptions = function (options) {
        opts = __assign(__assign({}, opts), (options || {}));
    };
    Log._Build = function (title, kaomoji_str, msg) {
        exports.log("\n" + title + " " + now() + "\n");
        if (typeof msg === "string")
            exports.log("" + kaomoji_str + msg);
        else {
            opts.displayKaomoji && exports.log(kaomoji_str + " \n");
            exports.log(msg);
        }
    };
    Log.Success = function (msg, options) {
        if (msg === void 0) { msg = "Success Log"; }
        if (options)
            Log.SetOptions(options);
        Log._Build(greenI(" SUCCESS "), kaomoji().success, msg);
    };
    Log.Error = function (msg, options) {
        if (msg === void 0) { msg = "Error Log"; }
        if (options)
            Log.SetOptions(options);
        Log._Build(redI(" Error "), kaomoji().error, msg);
    };
    Log.Info = function (msg, options) {
        if (msg === void 0) { msg = "Info Log"; }
        if (options)
            Log.SetOptions(options);
        Log._Build(blueI(" Info "), kaomoji().info, msg);
    };
    Log.Warning = function (msg, options) {
        if (msg === void 0) { msg = "Warning Log"; }
        if (options)
            Log.SetOptions(options);
        Log._Build(yellowI(" WARNING "), kaomoji().warning, msg);
    };
    return Log;
})();
exports.default = exports.Log;
//# sourceMappingURL=index.js.map