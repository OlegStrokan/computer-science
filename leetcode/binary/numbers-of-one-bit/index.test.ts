import { expect, test, describe } from "bun:test";
import { hammingWeightV1, hammingWeightV2 } from ".";

describe("hammingWeightV1", () => {
  test("should return 0 for input 0", () => {
    expect(hammingWeightV1(0)).toBe(0);
  });

  test("should return correct hamming weight for a small number", () => {
    expect(hammingWeightV1(3)).toBe(2);
  });

  test("should return correct hamming weight for a larger number", () => {
    expect(hammingWeightV1(11)).toBe(3);
    expect(hammingWeightV1(15)).toBe(4);
    expect(hammingWeightV1(31)).toBe(5);
  });

  test("should return correct hamming weight for a number with mixed bits", () => {
    expect(hammingWeightV1(0b1010101010101010)).toBe(8);
  });
});

describe("hammingWeightV2", () => {
  test("should return 0 for input 0", () => {
    expect(hammingWeightV2(0)).toBe(0);
  });

  test("should return correct hamming weight for a small number", () => {
    expect(hammingWeightV2(3)).toBe(2);
  });

  test("should return correct hamming weight for a larger number", () => {
    expect(hammingWeightV2(11)).toBe(3);
    expect(hammingWeightV2(15)).toBe(4);
    expect(hammingWeightV2(31)).toBe(5);
  });

  test("should return correct hamming weight for a number with mixed bits", () => {
    expect(hammingWeightV2(0b1010101010101010)).toBe(8);
  });
});
