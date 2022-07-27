import { test, expect } from "vitest";

import { sum } from "../index";

test("sync function from native code", () => {
  expect(sum(1, 2)).toBe(3);
});
