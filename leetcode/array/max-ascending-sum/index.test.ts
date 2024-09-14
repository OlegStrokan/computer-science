import { expect, it, describe } from "bun:test";
import { maxAscendingSum } from ".";

describe("Max Ascending sum test", () => {
  const testData = [10, 20, 30, 5, 10, 50];
  const result = 65;
  it("Should find max ascending sum", () => {
    const maxSum = maxAscendingSum(testData);
    expect(maxSum).toEqual(result);
  });
});
