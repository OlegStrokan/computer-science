import { expect, test } from "bun:test";
import { containsDuplicate } from ".";

test("should find duplicate value and return true", () => {
  const mockData = [1, 2, 3, 1];
  const result = containsDuplicate(mockData);
  expect(result).toBe(true);
});

test("should return false, because array don't have a duplicate value", () => {
  const mockData = [1, 2, 3, 4];
  const result = containsDuplicate(mockData);
  expect(result).toBe(false);
});
