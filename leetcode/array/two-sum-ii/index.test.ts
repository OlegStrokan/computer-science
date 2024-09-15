import { describe, expect, it } from "bun:test";
import { twoSumII } from ".";

describe("Two sum II tests", () => {
  it("Should return correct positions of array", () => {
    const result = twoSumII([1, 3, 4, 5, 7, 10, 11], 9);
    expect(result).toEqual([3, 4]); // 4 + 5 = 9
  });

  it("Should return [1, 2] for target 5", () => {
    const result = twoSumII([1, 2, 3, 4, 5], 5);
    expect(result).toEqual([1, 4]);
  });

  it("Should return [1, 3] for target 6", () => {
    const result = twoSumII([2, 3, 4, 5], 6);
    expect(result).toEqual([1, 3]);
  });

  it("Should return [2, 3] for target 8", () => {
    const result = twoSumII([1, 3, 5, 7, 9], 8);
    expect(result).toEqual([1, 4]);
  });

  it("Should return [1, 2] for target 2", () => {
    const result = twoSumII([1, 2], 3);
    expect(result).toEqual([1, 2]);
  });
});
