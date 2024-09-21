import { expect, it, describe } from "bun:test";
import { rob } from ".";

describe("House robber tests", () => {
  it("should find correct sum of robbing for typical case", () => {
    const result = rob([3, 10, 3, 1, 2, 9, 7, 8, 6]);
    expect(result).toEqual(28);
  });

  it("should handle empty input", () => {
    const result = rob([]);
    expect(result).toEqual(0);
  });

  it("should handle a single house", () => {
    const result = rob([5]);
    expect(result).toEqual(5);
  });

  it("should handle two houses", () => {
    const result1 = rob([5, 10]);
    expect(result1).toEqual(10);
    const result2 = rob([10, 5]);
    expect(result2).toEqual(10);
  });

  it("should handle three houses", () => {
    const result1 = rob([5, 10, 15]);
    expect(result1).toEqual(20);
    const result2 = rob([10, 5, 20]);
    expect(result2).toEqual(30);
  });

  it("should handle houses with the same amount of money", () => {
    const result = rob([10, 10, 10, 10]);
    expect(result).toEqual(20);
  });

  it("should handle houses in decreasing order", () => {
    const result = rob([20, 15, 10, 5]);
    expect(result).toEqual(30);
  });

  it("should handle houses in increasing order", () => {
    const result = rob([5, 10, 15, 20]);
    expect(result).toEqual(30);
  });
});
