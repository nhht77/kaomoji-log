"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
// Support Log without any format
index_1.default("No format value", {
    displayTime: false,
});
index_1.default({ Object: "is supported" }, {
    displayTime: {
        displayHour: false,
        displayDate: true,
    },
});
// // Log String
// Log.Success("normal string with Kaomoji");
// // Log Object
// Log.Success({ object: "with Kaomoji" });
// Log.SetOptions({
//   displayTime: true,
//   displayKaomoji: false,
// });
// Log.Success("Normal string without Kaomoji");
// // Log Array
// Log.SetOptions({
//   displayTime: true,
//   displayKaomoji: true,
// });
// Log.Success([{ array1: "with Kaomoji" }, { array2: "with Kaomoji" }]);
// // Time Options to be false
// Log.SetOptions({
//   displayTime: {
//     displayDate: true,
//     displayHour: false,
//   },
//   displayKaomoji: true,
// });
// Log.Success([{ array1: "with Kaomoji" }, { array2: "with Kaomoji" }]);
//# sourceMappingURL=test.js.map