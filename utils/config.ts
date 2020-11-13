import { TimeOptions } from "./date";

export type Options = {
  displayTime?: boolean | TimeOptions;
  displayKaomoji?: boolean;
};

export interface IConfig {
  options: Options | boolean;

  setOptions: (config: Options) => void;
  getOptions: () => Options;
}

export class Config implements IConfig {
  options: Options = {
    displayTime: true,
    displayKaomoji: true,
  };

  setOptions = (options: Options) => {
    this.options = { ...this.options, ...(options || {}) };
  };
  getOptions = () => this.options;
}
