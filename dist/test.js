"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importStar(require("./index"));
// Support Log without any format
index_1.log("Support Log without any format");
index_1.default("No format value");
index_1.default({ Object: "is supported" });
// Log String
index_1.default.Success("normal string with Kaomoji");
// Log Object
index_1.default.Success({ object: "with Kaomoji" });
index_1.default.SetOptions({
    displayTime: true,
    displayKaomoji: false,
});
index_1.default.Success("Normal string without Kaomoji");
// Log Array
index_1.default.SetOptions({
    displayTime: true,
    displayKaomoji: true,
});
index_1.default.Success([{ array1: "with Kaomoji" }, { array2: "with Kaomoji" }]);
//# sourceMappingURL=test.js.map