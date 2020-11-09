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

  const Set = (options: Options) => (opts = { ...opts, ...(options || {}) });

  const now = () => {
    var d = new Date(),
      dformat = "";

    if (typeof opts.displayTime == "object" && opts.displayTime.displayDate) {
      dformat = [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/");
    }

    if (typeof opts.displayTime == "object" && opts.displayTime.displayHour) {
      dformat = [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
    }

    if (
      (opts.displayTime && typeof opts.displayTime == "boolean") ||
      (typeof opts.displayTime == "object" &&
        opts.displayTime.displayDate &&
        opts.displayTime.displayHour)
    ) {
      dformat =
        [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
        " " +
        [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
    }

    return gray(dformat);
  };

  let kaomoji = () => ({
    success: opts.displayKaomoji ? green("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  ") : "",
    info: opts.displayKaomoji ? blue("(￣ρ￣)..zzZZ  ") : "",
    error: opts.displayKaomoji ? red("(╯°益°)╯彡┻━┻  ") : "",
    warning: opts.displayKaomoji ? yellow("┐(￣ヘ￣;)┌  ") : "",
  });

  return {
    Set: (options: Options) => Set(options),

    Success: (msg: string | Object = "Success Log") => {
      log(`\n${greenI(" SUCCESS ")} ${now()}\n`);
      if (typeof msg === "string") log(`${kaomoji().success}${msg}\n`);
      else {
        opts.displayKaomoji && log(`${kaomoji().success} \n`);
        log(msg);
      }
    },

    Error: (msg: string | Object = "Error Log") => {
      log(`\n${redI(" Error ")} ${now()} \n`);
      if (msg === "string") log(`${kaomoji().error}${msg}\n`);
      else {
        opts.displayKaomoji && log(`${kaomoji().error} \n`);
        log(msg);
      }
    },

    Info: (msg: string | Object = "Info Log") => {
      log(`\n${blueI(" Info ")} ${now()}\n`);
      if (msg === "string") log(`${kaomoji().info}${msg}\n`);
      else {
        opts.displayKaomoji && log(`${kaomoji().info} \n`);
        log(msg);
      }
    },

    Warning: (msg: string | Object = "Warning Log") => {
      log(`\n${yellowI(" WARNING ")} ${now()}\n`);
      if (msg === "string") log(`${kaomoji().warning}${msg} \n`);
      else {
        opts.displayKaomoji && log(`${kaomoji().warning} \n`);
        log(msg);
      }
    },

    Test: (msg: string = "Test") => {
      log(`${kaomoji().success}${msg} ${opts.displayKaomoji}`);
    },

    JSON: (val: any) => log(val),
  };
})();

export default Log;
