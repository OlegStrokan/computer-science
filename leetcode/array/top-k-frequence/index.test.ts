import { describe, it, expect } from "bun:test";
import { topKFrequent } from ".";

describe("topKFrequent", () => {
  it("should return the top 2 most frequent elements", () => {
    const nums = [1, 1, 2, 2, 2, 3, 3];
    const k = 2;
    const result = topKFrequent(nums, k);
    expect(result).toEqual([2, 1]);
  });

  it("should handle case with a single element", () => {
    const nums = [1];
    const k = 1;
    const result = topKFrequent(nums, k);
    expect(result).toEqual([1]);
  });

  it("should handle case where k is greater than number of unique elements", () => {
    const nums = [1, 1, 2, 2, 3];
    const k = 10;
    const result = topKFrequent(nums, k);
    expect(result).toEqual([1, 2, 3]);
  });
});
