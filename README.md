# `Kaomoji-log`

> Debug your application with kaomoji in the console

## Instalation

```bash
npm install @nhht77/kaomoji-log
```

## Usage

To use this package, please refer to the following code:

```ts
import Log from "@nhht77/kaomoji-log";

Log("YOUR LOG");

// dd/mm/yyyy hh:mm:ss
// YOUR LOG

Log.Success("YOUR LOG");

// SUCCESS  dd/mm/yyyy hh:mm:ss
//
// (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  normal string with Kaomoji
```

<img src="https://res.cloudinary.com/dgirnadqd/image/upload/v1605211656/kaomoji-log.png" />

## Options

```ts
options: Options {
  displayTime: boolean | {
        displayHour?: boolean; // Display current hour as hh:mm:ss - default true
        displayDate?: boolean; // Display current date as dd/mm.yyyy - default true
  }; // Display current time (date + hour) - default true
  displayKaomoji?: boolean; // display kaomoji - default true
}

```

## Change Log

[> Read the change log here ](https://github.com/nhht77/kaomoji-log/blob/master/CHANGELOG.md)

## License & Conduct

- MIT ©
- Shoutout to [subone
  ](https://github.com/kmccullough) with the Closure knowledge
- [Code of Conduct](code-of-conduct.md)
- [Contributor Code of Conduct](code-of-conduct.md).
