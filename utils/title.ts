import chalk from "chalk";

const greenI = chalk.green.inverse;
const redI = chalk.red.inverse;
const blueI = chalk.blue.inverse;
const yellowI = chalk.yellow.inverse;

export const title = {
  success: greenI(" SUCCESS "),
  info: blueI(" Info "),
  error: redI(" Error "),
  warning: yellowI(" WARNING "),
};
