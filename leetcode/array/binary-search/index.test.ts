import { describe, expect, it } from "bun:test";
import { binarySearch } from ".";

describe("binary search tests", () => {
  it("shoud return target value", () => {
    const result = binarySearch([-1, 0, 3, 5, 9, 12], 9);
    expect(result).toBe(4);
  });
  it("shoud return -1, because function didn't find target value", () => {
    const result = binarySearch([-1, 0, 3, 5, 9, 12], 2);
    expect(result).toBe(-1);
  });
});
