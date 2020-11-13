import Log, { log } from "./index";

// Support Log without any format
Log("No format value", {
  displayTime: false,
});
Log({ Object: "is supported" });

// // Log String
Log.Success("normal string with Kaomoji");

// Log Object
Log.Success({ object: "with Kaomoji" });

Log.SetOptions({
  displayTime: true,
  displayKaomoji: false,
});
Log.Success("Normal string without Kaomoji");

// Log Array
Log.SetOptions({
  displayTime: true,
  displayKaomoji: true,
});
Log.Success([{ array1: "with Kaomoji" }, { array2: "with Kaomoji" }]);

// Time Options to be false
Log.SetOptions({
  displayTime: {
    displayDate: true,
    displayHour: false,
  },
  displayKaomoji: true,
});
Log.Success([{ array1: "with Kaomoji" }, { array2: "with Kaomoji" }]);
