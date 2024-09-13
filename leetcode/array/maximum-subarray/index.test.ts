import { expect, test } from "bun:test";
import { maximumSubarray } from ".";

// Test cases
test("should return the maximum subarray sum for a given array of numbers", () => {
  // Test case 1: Standard case with mixed positive and numbers
  expect(maximumSubarray([1, -3, 2, 1, -1])).toBe(3);

  // Test case 2: All positive numbers
  expect(maximumSubarray([1, 2, 3, 4])).toBe(10);

  // Test case 3: Single element (positive)
  expect(maximumSubarray([5])).toBe(5);

  // Test case 4: Single element (negative)
  expect(maximumSubarray([-5])).toBe(-5);

  // Test case 5: All negative numbers
  expect(maximumSubarray([-1, -2, -3, -4])).toBe(-1);

  // Test case 6: Mixed positive and negative numbers with maximum subarray in the middle
  expect(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});
