import chalk from "chalk";

export const log = console.log;
const green = chalk.green;
const greenI = chalk.green.inverse;
const red = chalk.red;
const redI = chalk.red.inverse;
const blue = chalk.blue;
const blueI = chalk.blue.inverse;
const yellow = chalk.yellow;
const yellowI = chalk.yellow.inverse;
const gray = chalk.gray;

interface TimeOptions {
  displayHour?: boolean;
  displayDate?: boolean;
}

interface Options {
  displayTime?: boolean | TimeOptions;
  displayKaomoji?: boolean;
}

export const Log = (function () {
  let opts: Options = {
    displayTime: true,
    displayKaomoji: true,
  };

  // Note: Prepare Date String Log
  const now = () => {
    let d = new Date(),
      dformat = "";

    // Note: only show dd/mm/yyyy if option displayDate is true
    if (typeof opts.displayTime == "object" && opts.displayTime.displayDate)
      dformat = [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("/");

    // Note: only show hh:mm:ss if option displayHour is true
    if (typeof opts.displayTime == "object" && opts.displayTime.displayHour)
      dformat = [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");

    // Note: show both dd/mm/yyyy hh:mm:ss if options is true
    // Or displayHour and displayDate is true
    if (
      (typeof opts.displayTime == "boolean" && opts.displayTime) ||
      (typeof opts.displayTime == "object" &&
        opts.displayTime.displayDate &&
        opts.displayTime.displayHour)
    )
      dformat =
        [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
        " " +
        [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");

    return gray(dformat);
  };

  // Note: Prepare Kaomoji Log
  // TODO PICK Random kaomoji that represent the category
  let kaomoji = () => ({
    success: opts.displayKaomoji ? green("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  ") : "",
    info: opts.displayKaomoji ? blue("(￣ρ￣)..zzZZ  ") : "",
    error: opts.displayKaomoji ? red("(╯°益°)╯彡┻━┻  ") : "",
    warning: opts.displayKaomoji ? yellow("┐(￣ヘ￣;)┌  ") : "",
  });

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
    log(`\n${title} ${now()}\n`);
    if (typeof msg === "string") log(`${kaomoji_str}${msg}`);
    else {
      opts.displayKaomoji && log(`${kaomoji_str} \n`);
      log(msg);
    }
  };

  Log.Success = (msg: string | Object = "Success Log", options?: Options) => {
    if (options) Log.SetOptions(options);
    Log._Build(greenI(" SUCCESS "), kaomoji().success, msg);
  };

  Log.Error = (msg: string | Object = "Error Log", options?: Options) => {
    if (options) Log.SetOptions(options);
    Log._Build(redI(" Error "), kaomoji().error, msg);
  };

  Log.Info = (msg: string | Object = "Info Log", options?: Options) => {
    if (options) Log.SetOptions(options);
    Log._Build(blueI(" Info "), kaomoji().info, msg);
  };

  Log.Warning = (msg: string | Object = "Warning Log", options?: Options) => {
    if (options) Log.SetOptions(options);
    Log._Build(yellowI(" WARNING "), kaomoji().warning, msg);
  };

  return Log;
})();

export default Log;
