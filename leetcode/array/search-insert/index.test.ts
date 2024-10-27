import { expect, test } from "bun:test";
import { searchInsert } from ".";

test("searchInsert finds target in the array", () => {
  const nums = [1, 3, 5, 6];
  const target = 5;
  const result = searchInsert(nums, target);
  expect(result).toBe(2);
});

test("searchInsert inserts target at the end if not found", () => {
  const nums = [1, 3, 5, 6];
  const target = 7;
  const result = searchInsert(nums, target);
  expect(result).toBe(4);
});

test("searchInsert inserts target at the beginning if not found", () => {
  const nums = [1, 3, 5, 6];
  const target = 0;
  const result = searchInsert(nums, target);
  expect(result).toBe(0);
});
