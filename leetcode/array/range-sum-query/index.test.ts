import { describe, it, expect } from "bun:test";
import { RangeSumQuery } from ".";

describe("Range Sum Query", () => {
  it("should calculate the sum correctly for a simple range", () => {
    const arr = new RangeSumQuery([1, 2, 3, 4, 5]);
    const result = arr.sumRange(1, 3);
    expect(result).toBe(9);
  });

  it("should return the sum of the entire array when range covers all elements", () => {
    const arr = new RangeSumQuery([1, 2, 3, 4, 5]);
    const result = arr.sumRange(0, 4);
    expect(result).toBe(15);
  });

  it("should handle edge case when start and end are the same", () => {
    const arr = new RangeSumQuery([1, 2, 3, 4, 5]);
    const result = arr.sumRange(2, 2);
    expect(result).toBe(3);
  });
});
