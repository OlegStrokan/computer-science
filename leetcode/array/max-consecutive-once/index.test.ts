import { describe, it, expect } from "bun:test";
import { findMaxConsecutiveOnes } from ".";

describe("findMaxConsecutiveOnes", () => {
  it("should return the maximum number of consecutive ones", () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
    expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2);
    expect(findMaxConsecutiveOnes([1, 1, 1, 1, 1, 1])).toBe(6);
    expect(findMaxConsecutiveOnes([0, 0, 0, 0, 0, 0])).toBe(0);
    expect(findMaxConsecutiveOnes([0, 1, 1, 0, 1, 1, 1, 0, 1])).toBe(3);
  });

  it("should handle empty array", () => {
    expect(findMaxConsecutiveOnes([])).toBe(0);
  });

  it("should handle array with no ones", () => {
    expect(findMaxConsecutiveOnes([0, 0, 0, 0])).toBe(0);
  });

  it("should handle array with only ones", () => {
    expect(findMaxConsecutiveOnes([1, 1, 1, 1])).toBe(4);
  });

  it("should handle array with alternating ones and zeros", () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 0, 1, 0, 1])).toBe(1);
  });
});
