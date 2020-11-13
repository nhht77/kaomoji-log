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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.log = void 0;
var date_1 = require("./utils/date");
var kaomoji_1 = require("./utils/kaomoji");
var title_1 = require("./title");
exports.log = console.log;
exports.Log = (function () {
    // TODO options could be a class
    // TODO getOptions could be a method of that class
    // TODO setOptions could be a method of that class
    var opts = {
        displayTime: true,
        displayKaomoji: true,
    };
    function Log(value, options) {
        if (options)
            Log.SetOptions(options);
        exports.log("\n" + date_1.now());
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
        var timeOpts = opts.displayTime;
        exports.log("\n" + title + " " + date_1.now(timeOpts) + " " + (opts.displayKaomoji ? kaomoji_str : "") + "\n");
        exports.log(msg);
    };
    Log.Success = function (msg, options) {
        if (msg === void 0) { msg = "Success Log"; }
        if (options)
            Log.SetOptions(options);
        Log._Build(title_1.title.success, kaomoji_1.kaomoji(options === null || options === void 0 ? void 0 : options.displayKaomoji).success, msg);
    };
    Log.Error = function (msg, options) {
        if (msg === void 0) { msg = "Error Log"; }
        if (options)
            Log.SetOptions(options);
        Log._Build(title_1.title.error, kaomoji_1.kaomoji(options === null || options === void 0 ? void 0 : options.displayKaomoji).error, msg);
    };
    Log.Info = function (msg, options) {
        if (msg === void 0) { msg = "Info Log"; }
        if (options)
            Log.SetOptions(options);
        Log._Build(title_1.title.info, kaomoji_1.kaomoji(options === null || options === void 0 ? void 0 : options.displayKaomoji).info, msg);
    };
    Log.Warning = function (msg, options) {
        if (msg === void 0) { msg = "Warning Log"; }
        if (options)
            Log.SetOptions(options);
        Log._Build(title_1.title.warning, kaomoji_1.kaomoji(options === null || options === void 0 ? void 0 : options.displayKaomoji).warning, msg);
    };
    return Log;
})();
exports.default = exports.Log;
//# sourceMappingURL=index.js.map