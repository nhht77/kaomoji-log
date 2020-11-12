"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
// Support Log without any format
index_1.default("No format value");
index_1.default({ Object: "is supported" });
index_1.default({ Array: "is supported" });
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