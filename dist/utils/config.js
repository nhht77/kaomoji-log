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
exports.Config = void 0;
var Config = /** @class */ (function () {
    function Config() {
        var _this = this;
        this.options = {
            displayTime: true,
            displayKaomoji: true,
        };
        this.setOptions = function (options) {
            _this.options = __assign(__assign({}, _this.options), (options || {}));
        };
        this.getOptions = function () { return _this.options; };
    }
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map