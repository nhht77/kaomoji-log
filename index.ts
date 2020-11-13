import { now } from "./utils/date";
import { kaomoji } from "./utils/kaomoji";
import { title } from "./utils/title";
import { Config, Options } from "./utils/config";
import { _Build } from "./utils/log";

export const log = console.log;

export const Log = (function () {
  let configs: Config = new Config();

  Log.GetOptions = configs.getOptions();
  Log.SetOptions = configs.setOptions;

  function Log(value: any, options?: Options) {
    // TODO Instead of set, do getOptions
    if (options) Log.SetOptions(options);
    log(`\n${now()}`);
    log(value);
  }

  Log._Build = _Build;

  Log.Success = (msg: string | Object = "Success Log", options?: Options) => {
    if (options) Log.SetOptions(options);
    Log._Build(
      title.success,
      kaomoji(options?.displayKaomoji).success,
      msg,
      configs.options
    );
  };

  Log.Error = (msg: string | Object = "Error Log", options?: Options) => {
    if (options) Log.SetOptions(options);
    Log._Build(
      title.error,
      kaomoji(options?.displayKaomoji).error,
      msg,
      configs.options
    );
  };

  Log.Info = (msg: string | Object = "Info Log", options?: Options) => {
    if (options) Log.SetOptions(options);
    Log._Build(
      title.info,
      kaomoji(options?.displayKaomoji).info,
      msg,
      configs.options
    );
  };

  Log.Warning = (msg: string | Object = "Warning Log", options?: Options) => {
    if (options) Log.SetOptions(options);
    Log._Build(
      title.warning,
      kaomoji(options?.displayKaomoji).warning,
      msg,
      configs.options
    );
  };

  return Log;
})();

export default Log;
