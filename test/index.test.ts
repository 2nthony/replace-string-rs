import { test, expect } from "vitest";

import { replaceString } from "../index";

test("sync function from native code", () => {
  const str = "hello word!";

  expect(replaceString(str, "word", "world")).toBe("hello world!");
});
