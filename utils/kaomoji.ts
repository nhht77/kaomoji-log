import chalk from "chalk";

const green = chalk.green;
const red = chalk.red;
const blue = chalk.blue;
const yellow = chalk.yellow;

// Note: Prepare Kaomoji Log
// TODO PICK Random kaomoji that represent the category
export const kaomoji = (isDisplay: boolean = true) => ({
  success: isDisplay ? green("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  ") : "",
  info: isDisplay ? blue("(￣ρ￣)..zzZZ  ") : "",
  error: isDisplay ? red("(╯°益°)╯彡┻━┻  ") : "",
  warning: isDisplay ? yellow("┐(￣ヘ￣;)┌  ") : "",
});
