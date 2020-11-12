import Log from "./index";

// Support Log without any format
Log("No format value");
Log({ Object: "is supported" });
Log({ Array: "is supported" });

// Log String
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
