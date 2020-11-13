import chalk from "chalk";

const gray = chalk.gray;

export interface TimeOptions {
  displayHour?: boolean;
  displayDate?: boolean;
}

export const now = (opts?: boolean | TimeOptions) => {
  let d = new Date(),
    dformat = "";

  // Note: only show dd/mm/yyyy if option displayDate is true
  if (typeof opts == "object" && opts.displayDate)
    dformat = [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("/");

  // Note: only show hh:mm:ss if option displayHour is true
  if (typeof opts == "object" && opts.displayHour)
    dformat = [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");

  // Note: show both dd/mm/yyyy hh:mm:ss if options is true
  // Or displayHour and displayDate is true
  if (
    (typeof opts == "boolean" && opts) ||
    (typeof opts == "object" && opts.displayDate && opts.displayHour)
  )
    dformat =
      [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
      " " +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");

  return gray(dformat);
};
