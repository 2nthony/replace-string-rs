# napi-rs-starter

[![version](https://img.shields.io/npm/v/napi-rs-starter?label=&color=29BC9B)](https://npm.im/napi-rs-starter)
![https://github.com/2nthony/napi-rs-starter/actions](https://img.shields.io/github/workflow/status/2nthony/napi-rs-starter/CI?label=)

> Template project for writing node packages with napi-rs.

## Use this template

1. Run `yarn install` to install dependencies.
2. Run `npx napi rename -n [name]` command under the project folder to rename your package.

## Install

```sh
npm i napi-rs-starter
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

## Develop requirements

- Install the latest `Rust`
- Install `Node.js@10+` which fully supported `Node-API`
- Install `yarn@1.x`

## Test in local

- yarn
- yarn build
- yarn test

And you will see:

```bash
$ vitest --reporter verbose

 ✓ test/index.test.ts (1)
   ✓ sync function from native code

Test Files  1 passed (1)
     Tests  1 passed (1)
      Time  573ms (in thread 1ms, 57294.94%)
```

## Release

Ensure you have set your **NPM_TOKEN** in the `GitHub` project setting.

In `Settings -> Secrets`, add **NPM_TOKEN** into it.

When you want to release the package:

```
yarn release
```

GitHub actions will do the rest job for you.

## Sponsors

[![sponsors](https://cdn.jsdelivr.net/gh/2nthony/sponsors-image/sponsors.svg)](https://github.com/sponsors/2nthony)

## License

MIT &copy; [2nthony](https://github.com/sponsors/2nthony)
