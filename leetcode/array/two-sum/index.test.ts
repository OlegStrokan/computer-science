import { expect, test } from "bun:test";
import { twoSum } from ".";

test("should return correct indexes", () => {
  const result = twoSum([2, 7, 9, 11], 9);
  expect(result).toEqual([0, 1]);
});
