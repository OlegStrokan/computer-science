import { describe, expect, it } from "bun:test";
import { subsets } from ".";

describe("subsets function", () => {
  it("should return all subsets for [1, 2, 3]", () => {
    const nums = [1, 2, 3];
    const expected = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];

    const result = subsets(nums);

    expect(result.length).toBe(expected.length);
    expected.forEach((subset) => {
      expect(result).toContainEqual(subset);
    });
  });

  it("should return all subsets for [0]", () => {
    const nums = [0];
    const expected = [[], [0]];

    const result = subsets(nums);

    expect(result.length).toBe(expected.length);
    expected.forEach((subset) => {
      expect(result).toContainEqual(subset);
    });
  });
});
