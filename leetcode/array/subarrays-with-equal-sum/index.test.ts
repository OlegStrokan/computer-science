import { expect, describe, it } from "bun:test";
import { findSubarraysWithEqualSum } from ".";

describe("Find subarrays with equal sum", () => {
  it("Should return false, because there is no subarrays with equal sum", () => {
    const result = findSubarraysWithEqualSum([1, 2, 3, 4, 5]);
    expect(result).toBeFalse();
  });
  it("Should return true, because there are subarrays with equal sum", () => {
    const result = findSubarraysWithEqualSum([4, 2, 4]);
    expect(result).toBeTrue();
  });
});
