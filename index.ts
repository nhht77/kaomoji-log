import { TimeOptions, now } from "./utils/date";
import { kaomoji } from "./utils/kaomoji";
import { title } from "./utils/title";

export const log = console.log;

interface Options {
  displayTime?: boolean | TimeOptions;
  displayKaomoji?: boolean;
}

export const Log = (function () {
  // TODO options could be a class
  // TODO getOptions could be a method of that class
  // TODO setOptions could be a method of that class
  let opts: Options = {
    displayTime: true,
    displayKaomoji: true,
  };

  function Log(value: any, options?: Options) {
    if (options) Log.SetOptions(options);

    log(`\n${now()}`);
    log(value);
  }

  Log.GetOptions = function () {
    log(opts);
    return opts;
  };

  Log.SetOptions = function (options: Options) {
    opts = { ...opts, ...(options || {}) };
  };

  Log._Build = (title: string, kaomoji_str: string, msg: string | Object) => {
    let { displayTime, displayKaomoji } = opts;
    log(
      `\n${title} ${now(displayTime)} ${displayKaomoji ? kaomoji_str : ""}\n`
    );
    log(msg);
  };

  Log.Success = (msg: string | Object = "Success Log", options?: Options) => {
    if (options) Log.SetOptions(options);
    Log._Build(title.success, kaomoji(options?.displayKaomoji).success, msg);
  };

  Log.Error = (msg: string | Object = "Error Log", options?: Options) => {
    if (options) Log.SetOptions(options);
    Log._Build(title.error, kaomoji(options?.displayKaomoji).error, msg);
  };

  Log.Info = (msg: string | Object = "Info Log", options?: Options) => {
    if (options) Log.SetOptions(options);
    Log._Build(title.info, kaomoji(options?.displayKaomoji).info, msg);
  };

  Log.Warning = (msg: string | Object = "Warning Log", options?: Options) => {
    if (options) Log.SetOptions(options);
    Log._Build(title.warning, kaomoji(options?.displayKaomoji).warning, msg);
  };

  return Log;
})();

export default Log;
