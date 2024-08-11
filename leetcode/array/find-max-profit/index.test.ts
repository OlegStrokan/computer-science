import { expect, test } from "bun:test";
import { findMaxProfix } from ".";

test("should return most profitable way to buy/sell stocks if there is profitable way", () => {
  const maxProfix = 5;
  const stockPrices = [7, 1, 5, 3, 6, 4];
  const result = findMaxProfix(stockPrices);
  expect(result).toBe(maxProfix);
});

test("should return 0 if buy stocks is not profitable", () => {
  const maxProfix = 0;
  const stockPrices = [7, 5, 2, 1];
  const result = findMaxProfix(stockPrices);
  expect(result).toBe(maxProfix);
});
