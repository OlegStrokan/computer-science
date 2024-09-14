import { expect, describe, it } from "bun:test";
import { bestTotalPrice } from ".";

describe("Best total price test", () => {
  const testArray = [9, 20, 18, 2, 3, 10, 11, 1, 29, 1, 2, 4, 10, 30, 2];
  it("Should calculate max best price of 5 elements", () => {
    const bestPrice = bestTotalPrice(testArray, 5);
    expect(bestPrice).toEqual(54);
  });
});
