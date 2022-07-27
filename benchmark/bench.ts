import b from "benny";

import { sum } from "../index";

function jsSum(a: number, b: number) {
  return a + b;
}

async function run() {
  await b.suite(
    "Sum 1 + 2",

    b.add("Native 1 + 2", () => {
      sum(1, 2);
    }),

    b.add("JavaScript 1 + 2", () => {
      jsSum(1, 2);
    }),

    b.cycle(),
    b.complete(),
  );
}

run().catch((e) => {
  console.error(e);
});
