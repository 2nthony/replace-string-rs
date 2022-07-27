# replace-string-rs (WIP)

[![version](https://img.shields.io/npm/v/replace-string-rs?label=&color=29BC9B)](https://npm.im/replace-string-rs)
![https://github.com/2nthony/replace-string-rs/actions](https://img.shields.io/github/workflow/status/2nthony/replace-string-rs/CI?label=)

Rust implementation string `replace` in Node.js.

## ⚠️ Heads up

Faster than `String.prototype.{replace,replaceAll}` if over 100 words, see the [Benchmark](#benchmark) for details.

## Install

```sh
npm i replace-string-rs
```

## Support matrix

### Operating Systems

|                  | node14 | node16 | node18 |
| ---------------- | ------ | ------ | ------ |
| Windows x64      | ✓      | ✓      | ✓      |
| Windows x32      | ✓      | ✓      | ✓      |
| Windows arm64    | ✓      | ✓      | ✓      |
| macOS x64        | ✓      | ✓      | ✓      |
| macOS arm64      | ✓      | ✓      | ✓      |
| Linux x64 gnu    | ✓      | ✓      | ✓      |
| Linux x64 musl   | ✓      | ✓      | ✓      |
| Linux arm gnu    | ✓      | ✓      | ✓      |
| Linux arm64 gnu  | ✓      | ✓      | ✓      |
| Linux arm64 musl | ✓      | ✓      | ✓      |
| Android arm64    | ✓      | ✓      | ✓      |
| Android armv7    | ✓      | ✓      | ✓      |
| FreeBSD x64      | ✓      | ✓      | ✓      |

## Benchmark

```sh
Running "Replace 1 words" suite...
Progress: 100%

  Native replace string:
    3 704 023 ops/s, ±0.17%    | slowest, 75.04% slower

  JavaScript replace via RegExp:
    14 836 889 ops/s, ±0.15%   | fastest

  JavaScript replaceAll:
    12 363 590 ops/s, ±0.09%   | 16.67% slower

Finished 3 cases!
  Fastest: JavaScript replace via RegExp
  Slowest: Native replace string
Running "Replace 10 words" suite...
Progress: 100%

  Native replace string:
    1 620 937 ops/s, ±0.10%   | slowest, 40.29% slower

  JavaScript replace via RegExp:
    2 714 526 ops/s, ±0.05%   | fastest

  JavaScript replaceAll:
    2 598 590 ops/s, ±0.24%   | 4.27% slower

Finished 3 cases!
  Fastest: JavaScript replace via RegExp
  Slowest: Native replace string
Running "Replace 100 words" suite...
Progress: 100%

  Native replace string:
    354 206 ops/s, ±0.44%   | fastest

  JavaScript replace via RegExp:
    303 954 ops/s, ±0.35%   | 14.19% slower

  JavaScript replaceAll:
    303 908 ops/s, ±0.05%   | slowest, 14.2% slower

Finished 3 cases!
  Fastest: Native replace string
  Slowest: JavaScript replaceAll
Running "Replace 1000 words" suite...
Progress: 100%

  Native replace string:
    44 418 ops/s, ±0.09%   | fastest

  JavaScript replace via RegExp:
    30 664 ops/s, ±0.76%   | 30.96% slower

  JavaScript replaceAll:
    30 590 ops/s, ±0.06%   | slowest, 31.13% slower

Finished 3 cases!
  Fastest: Native replace string
  Slowest: JavaScript replaceAll
Running "Replace 10000 words" suite...
Progress: 100%

  Native replace string:
    4 734 ops/s, ±0.05%   | fastest

  JavaScript replace via RegExp:
    2 926 ops/s, ±0.37%   | 38.19% slower

  JavaScript replaceAll:
    2 921 ops/s, ±0.12%   | slowest, 38.3% slower

Finished 3 cases!
  Fastest: Native replace string
  Slowest: JavaScript replaceAll
```

## Sponsors

[![sponsors](https://cdn.jsdelivr.net/gh/2nthony/sponsors-image/sponsors.svg)](https://github.com/sponsors/2nthony)

## License

MIT &copy; [2nthony](https://github.com/sponsors/2nthony)
