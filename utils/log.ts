import { now } from "./date";
import { Options } from "./config";

export const log = console.log;

export const _Build = (
  title: string,
  kaomoji_str: string,
  msg: string | Object,
  options: Options
) => {
  let { displayTime, displayKaomoji } = options;
  log(`\n${title} ${now(displayTime)} ${displayKaomoji ? kaomoji_str : ""}`);
  log(msg);
};
