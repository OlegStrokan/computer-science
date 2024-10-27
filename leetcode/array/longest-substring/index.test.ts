import { describe, expect, it } from "bun:test";
import { longestSubstring } from ".";

describe("longestSubstring", () => {
  it("should return the length of the longest substring without repeating characters", () => {
    const input = "abcabcbb";
    const result = longestSubstring(input);
    const expected = 3;

    expect(result).toBe(expected);
  });

  it("should return the entire length when no repeating characters", () => {
    const input = "abcdef";
    const result = longestSubstring(input);
    const expected = 6;

    expect(result).toBe(expected);
  });

  it("should return 0 for an empty string", () => {
    const input = "";
    const result = longestSubstring(input);
    const expected = 0;

    expect(result).toBe(expected);
  });
});
