"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.log = void 0;
var date_1 = require("./utils/date");
var kaomoji_1 = require("./utils/kaomoji");
var title_1 = require("./utils/title");
var config_1 = require("./utils/config");
var log_1 = require("./utils/log");
exports.log = console.log;
exports.Log = (function () {
    var configs = new config_1.Config();
    Log.GetOptions = configs.getOptions();
    Log.SetOptions = configs.setOptions;
    function Log(value, options) {
        // TODO Instead of set, do getOptions
        if (options)
            Log.SetOptions(options);
        exports.log("\n" + date_1.now());
        exports.log(value);
    }
    Log._Build = log_1._Build;
    Log.Success = function (msg, options) {
        if (msg === void 0) { msg = "Success Log"; }
        if (options)
            Log.SetOptions(options);
        Log._Build(title_1.title.success, kaomoji_1.kaomoji(options === null || options === void 0 ? void 0 : options.displayKaomoji).success, msg, configs.options);
    };
    Log.Error = function (msg, options) {
        if (msg === void 0) { msg = "Error Log"; }
        if (options)
            Log.SetOptions(options);
        Log._Build(title_1.title.error, kaomoji_1.kaomoji(options === null || options === void 0 ? void 0 : options.displayKaomoji).error, msg, configs.options);
    };
    Log.Info = function (msg, options) {
        if (msg === void 0) { msg = "Info Log"; }
        if (options)
            Log.SetOptions(options);
        Log._Build(title_1.title.info, kaomoji_1.kaomoji(options === null || options === void 0 ? void 0 : options.displayKaomoji).info, msg, configs.options);
    };
    Log.Warning = function (msg, options) {
        if (msg === void 0) { msg = "Warning Log"; }
        if (options)
            Log.SetOptions(options);
        Log._Build(title_1.title.warning, kaomoji_1.kaomoji(options === null || options === void 0 ? void 0 : options.displayKaomoji).warning, msg, configs.options);
    };
    return Log;
})();
exports.default = exports.Log;
//# sourceMappingURL=index.js.map