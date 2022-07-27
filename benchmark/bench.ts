import b from "benny";

import { replaceString } from "../index";

function replaceAll(input: string, substr: string, newSubstr: string) {
  return input.replaceAll(substr, newSubstr);
}

async function bench(count: number) {
  const str = "hello word!".repeat(count);

  await b.suite(
    `Replace ${count} words`,

    b.add("Native replace string", () => {
      replaceString(str, "word", "world");
    }),

    b.add("JavaScript replace via RegExp", () => {
      str.replace(/word/g, "world");
    }),

    b.add("JavaScript replaceAll", () => {
      replaceAll(str, "word", "world");
    }),

    b.cycle(),
    b.complete(),
  );
}

async function run() {
  await bench(1);
  await bench(10);
  await bench(100);
  await bench(1000);
  await bench(10000);
}

run().catch((e) => {
  console.error(e);
});
