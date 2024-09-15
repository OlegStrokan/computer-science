import { expect, it, describe } from "bun:test";
import { containsNearbyDuplicate } from ".";

describe("Contains duplicate II", () => {
  it("Should successfully find duplicate and return true", () => {
    const result = containsNearbyDuplicate([1, 2, 3, 1], 3);
    expect(result).toBeTrue();
  });
  it("Should successfully find duplicate and return true", () => {
    const result = containsNearbyDuplicate([1, 0, 1, 1], 1);
    expect(result).toBeTrue();
  });
  it("Should successfully find duplicate and return false because ABS betwen duplicate more then K", () => {
    const result = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
    expect(result).toBeFalse();
  });
});
