"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
// Log String
index_1.default.Success("Stranger things here");
index_1.default.Info("Stranger things here");
index_1.default.Error("Stranger things here");
index_1.default.Warning("Stranger things here");
// Log Object
index_1.default.Success({ value: "object" });
index_1.default.Info({ value: "object" });
index_1.default.Error({ value: "object" });
index_1.default.Warning({ value: "object" });
index_1.default.Set({
    displayTime: true,
    displayKaomoji: false,
});
index_1.default.Success("No Kaomoji");
index_1.default.Info("No Kaomoji");
index_1.default.Error("No Kaomoji");
index_1.default.Warning("No Kaomoji");
//# sourceMappingURL=test.js.map