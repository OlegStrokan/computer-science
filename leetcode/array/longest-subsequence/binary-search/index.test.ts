import { describe, expect, it } from "bun:test";
import { lengthOfLISByBynarySearch } from ".";

describe("lengthOfLIS using binary seach", () => {
  it("should return the correct LIS length for a general case", () => {
    const nums = [10, 9, 2, 5, 3, 7, 101, 18];
    const result = lengthOfLISByBynarySearch(nums);
    expect(result).toBe(4);
  });

  it("should return 1 for an array with all elements the same", () => {
    const nums = [5, 5, 5, 5, 5];
    const result = lengthOfLISByBynarySearch(nums);
    expect(result).toBe(1);
  });

  it("should return the length of the array for an already increasing sequence", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = lengthOfLISByBynarySearch(nums);
    expect(result).toBe(5);
  });

  it("should return 1 for an array with a decreasing sequence", () => {
    const nums = [5, 4, 3, 2, 1];
    const result = lengthOfLISByBynarySearch(nums);
    expect(result).toBe(1);
  });
});
