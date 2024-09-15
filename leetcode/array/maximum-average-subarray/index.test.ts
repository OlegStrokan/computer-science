import { expect, it, describe } from "bun:test";
import { findMaxAverageSubarray } from ".";

describe("Maximum average subarray I", () => {
  it("Should successfully find maximum average subarray", () => {
    const result = findMaxAverageSubarray([1, 12, -5, 6, 50, 3], 4);
    expect(result).toBe(15.75);
  });
});
