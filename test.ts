import Log from "./index";

// Log String
Log.Success("Stranger things here");
Log.Info("Stranger things here");
Log.Error("Stranger things here");
Log.Warning("Stranger things here");

// Log Object
Log.Success({ value: "object" });
Log.Info({ value: "object" });
Log.Error({ value: "object" });
Log.Warning({ value: "object" });

Log.Set({
  displayTime: true,
  displayKaomoji: false,
});
Log.Success("No Kaomoji");
Log.Info("No Kaomoji");
Log.Error("No Kaomoji");
Log.Warning("No Kaomoji");
